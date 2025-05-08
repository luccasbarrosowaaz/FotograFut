// User types
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'customer' | 'photographer' | 'admin';
  createdAt: Date;
}

export interface Customer extends User {
  role: 'customer';
  orders: Order[];
}

export interface Photographer extends User {
  role: 'photographer';
  slug: string;
  bio: string;
  avatarUrl: string;
  coverUrl: string;
  plan: PhotographerPlan;
  albums: Album[];
  sales: Sale[];
  balance: number;
}

export interface Admin extends User {
  role: 'admin';
}

export type PhotographerPlan = {
  type: 'lifetime' | 'free';
  commissionRate: number;
  monthlyFee: number;
  startDate: Date;
};

// Content types
export interface Album {
  id: string;
  title: string;
  description: string;
  coverUrl: string;
  photographerId: string;
  photographerName: string;
  price: number;
  date: Date;
  location: string;
  tags: string[];
  category: string;
  photos: Photo[];
  createdAt: Date;
}

export interface Photo {
  id: string;
  albumId: string;
  photographerId: string;
  title: string;
  url: string;
  thumbnailUrl: string;
  price: number;
  width: number;
  height: number;
  createdAt: Date;
}

// Commerce types
export interface CartItem {
  id: string;
  photoId: string;
  albumId: string;
  photographerId: string;
  title: string;
  thumbnailUrl: string;
  price: number;
}

export interface Order {
  id: string;
  customerId: string;
  items: OrderItem[];
  totalAmount: number;
  status: 'pending' | 'paid' | 'delivered' | 'canceled';
  paymentMethod: string;
  paymentId: string;
  createdAt: Date;
}

export interface OrderItem {
  id: string;
  orderId: string;
  photoId: string;
  albumId: string;
  photographerId: string;
  price: number;
  title: string;
  url: string;
}

export interface Sale {
  id: string;
  photographerId: string;
  orderId: string;
  photoId: string;
  albumId: string;
  amount: number;
  commission: number;
  netAmount: number;
  createdAt: Date;
}