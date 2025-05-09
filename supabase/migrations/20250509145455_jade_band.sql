/*
  # Esquema inicial do banco de dados

  1. Novas Tabelas
    - `profiles`
      - Armazena informações dos usuários (fotógrafos e clientes)
      - Vinculado à tabela auth.users do Supabase
    - `photographer_plans`
      - Registra os planos ativos dos fotógrafos
    - `albums`
      - Álbuns de fotos criados pelos fotógrafos
    - `photos`
      - Fotos individuais dentro dos álbuns
    - `orders`
      - Pedidos realizados pelos clientes
    - `order_items`
      - Itens individuais de cada pedido
    - `plan_subscriptions`
      - Controle de assinaturas dos planos
    - `promo_codes`
      - Códigos promocionais para planos

  2. Segurança
    - RLS habilitado em todas as tabelas
    - Políticas específicas para cada tipo de usuário
*/

-- Profiles table
CREATE TABLE public.profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email text NOT NULL,
  full_name text,
  avatar_url text,
  role text NOT NULL CHECK (role IN ('customer', 'photographer', 'admin')),
  slug text UNIQUE,
  bio text,
  cover_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Policies for profiles
CREATE POLICY "Public profiles are viewable by everyone"
  ON public.profiles FOR SELECT
  USING (true);

CREATE POLICY "Users can update own profile"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = id);

-- Photographer plans table
CREATE TABLE public.photographer_plans (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  price decimal(10,2) NOT NULL,
  duration_months integer NOT NULL,
  features jsonb NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.photographer_plans ENABLE ROW LEVEL SECURITY;

-- Policies for photographer plans
CREATE POLICY "Photographer plans are viewable by everyone"
  ON public.photographer_plans FOR SELECT
  USING (true);

-- Plan subscriptions table
CREATE TABLE public.plan_subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  photographer_id uuid REFERENCES public.profiles(id) ON DELETE CASCADE,
  plan_id uuid REFERENCES public.photographer_plans(id) ON DELETE CASCADE,
  status text NOT NULL CHECK (status IN ('active', 'cancelled', 'expired')),
  start_date timestamptz NOT NULL DEFAULT now(),
  end_date timestamptz NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.plan_subscriptions ENABLE ROW LEVEL SECURITY;

-- Policies for plan subscriptions
CREATE POLICY "Users can view own subscriptions"
  ON public.plan_subscriptions FOR SELECT
  USING (auth.uid() = photographer_id);

-- Promo codes table
CREATE TABLE public.promo_codes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  code text UNIQUE NOT NULL,
  type text NOT NULL CHECK (type IN ('percentage', 'fixed', 'trial')),
  value decimal(10,2),
  duration_days integer,
  max_uses integer,
  uses_count integer DEFAULT 0,
  expires_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.promo_codes ENABLE ROW LEVEL SECURITY;

-- Policies for promo codes
CREATE POLICY "Promo codes are viewable by everyone"
  ON public.promo_codes FOR SELECT
  USING (true);

-- Albums table
CREATE TABLE public.albums (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  photographer_id uuid REFERENCES public.profiles(id) ON DELETE CASCADE,
  title text NOT NULL,
  description text,
  cover_url text,
  price decimal(10,2) NOT NULL,
  event_date date NOT NULL,
  location text NOT NULL,
  category text NOT NULL,
  tags text[],
  status text NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.albums ENABLE ROW LEVEL SECURITY;

-- Policies for albums
CREATE POLICY "Published albums are viewable by everyone"
  ON public.albums FOR SELECT
  USING (status = 'published');

CREATE POLICY "Photographers can manage own albums"
  ON public.albums FOR ALL
  USING (auth.uid() = photographer_id);

-- Photos table
CREATE TABLE public.photos (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  album_id uuid REFERENCES public.albums(id) ON DELETE CASCADE,
  photographer_id uuid REFERENCES public.profiles(id) ON DELETE CASCADE,
  title text NOT NULL,
  original_url text NOT NULL,
  thumbnail_url text NOT NULL,
  watermark_url text NOT NULL,
  width integer NOT NULL,
  height integer NOT NULL,
  price decimal(10,2) NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.photos ENABLE ROW LEVEL SECURITY;

-- Policies for photos
CREATE POLICY "Photos in published albums are viewable by everyone"
  ON public.photos FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.albums
      WHERE id = photos.album_id
      AND status = 'published'
    )
  );

CREATE POLICY "Photographers can manage own photos"
  ON public.photos FOR ALL
  USING (auth.uid() = photographer_id);

-- Orders table
CREATE TABLE public.orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_id uuid REFERENCES public.profiles(id) ON DELETE CASCADE,
  status text NOT NULL CHECK (status IN ('pending', 'paid', 'cancelled')),
  total_amount decimal(10,2) NOT NULL,
  payment_intent_id text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

-- Policies for orders
CREATE POLICY "Users can view own orders"
  ON public.orders FOR SELECT
  USING (auth.uid() = customer_id);

CREATE POLICY "Users can create own orders"
  ON public.orders FOR INSERT
  WITH CHECK (auth.uid() = customer_id);

-- Order items table
CREATE TABLE public.order_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id uuid REFERENCES public.orders(id) ON DELETE CASCADE,
  photo_id uuid REFERENCES public.photos(id) ON DELETE CASCADE,
  price decimal(10,2) NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.order_items ENABLE ROW LEVEL SECURITY;

-- Policies for order items
CREATE POLICY "Users can view own order items"
  ON public.order_items FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.orders
      WHERE id = order_items.order_id
      AND customer_id = auth.uid()
    )
  );

CREATE POLICY "Users can create order items for own orders"
  ON public.order_items FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.orders
      WHERE id = order_items.order_id
      AND customer_id = auth.uid()
    )
  );

-- Insert initial photographer plan
INSERT INTO public.photographer_plans (name, price, duration_months, features)
VALUES (
  'Plano Vitalício',
  1500.00,
  NULL,
  '{"upload_ilimitado": true, "sem_comissao": true, "relatorios_detalhados": true, "url_personalizada": true, "suporte_prioritario": true}'
);

-- Insert trial promo code
INSERT INTO public.promo_codes (code, type, duration_days, max_uses)
VALUES ('testeummesgratis', 'trial', 30, 100);