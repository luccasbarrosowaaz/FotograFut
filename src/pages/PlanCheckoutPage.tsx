import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, CreditCard } from 'lucide-react';
import { useAuthStore } from '../lib/store';

interface CheckoutFormData {
  cardNumber: string;
  cardHolder: string;
  expiryDate: string;
  cvv: string;
  promoCode: string;
}

const PlanCheckoutPage = () => {
  const { planId } = useParams<{ planId: string }>();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<CheckoutFormData>({
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: '',
    promoCode: ''
  });

  const { isAuthenticated, user } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/entrar?redirect=planos');
      return;
    }

    if (planId === 'free') {
      // Processar plano gratuito
      handleFreePlan();
    }
  }, [isAuthenticated, planId, navigate]);

  const handleFreePlan = async () => {
    try {
      setLoading(true);
      // Aqui você implementaria a lógica para ativar o plano gratuito
      // Por exemplo, uma chamada à API do Supabase para atualizar o perfil do usuário
      
      // Simular processamento
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      navigate('/fotografo/painel');
    } catch (error) {
      console.error('Erro ao ativar plano gratuito:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/create-checkout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
        },
        body: JSON.stringify({
          planId,
          promoCode: formData.promoCode || null
        })
      });

      const { sessionId, error } = await response.json();

      if (error) {
        throw new Error(error);
      }

      // Redirecionar para a página de checkout do Stripe
      window.location.href = sessionId;
    } catch (error) {
      console.error('Erro ao criar sessão de checkout:', error);
      alert('Erro ao processar pagamento. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  if (planId === 'free') {
    return (
      <div className="min-h-screen bg-background py-12">
        <div className="container-custom max-w-2xl">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h1 className="text-2xl font-bold mb-4">Ativando Plano Gratuito</h1>
            <p className="text-text-light mb-6">
              Aguarde enquanto processamos sua solicitação...
            </p>
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent mx-auto"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container-custom max-w-2xl">
        <button 
          onClick={() => navigate('/planos')}
          className="flex items-center text-primary hover:text-accent transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar para Planos
        </button>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-2xl font-bold mb-6">Finalizar Contratação</h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="cardNumber" className="block text-sm font-medium text-text mb-1">
                Número do Cartão
              </label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                className="input"
                placeholder="0000 0000 0000 0000"
                value={formData.cardNumber}
                onChange={handleInputChange}
                required
              />
            </div>

            <div>
              <label htmlFor="cardHolder" className="block text-sm font-medium text-text mb-1">
                Nome no Cartão
              </label>
              <input
                type="text"
                id="cardHolder"
                name="cardHolder"
                className="input"
                value={formData.cardHolder}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="expiryDate" className="block text-sm font-medium text-text mb-1">
                  Data de Validade
                </label>
                <input
                  type="text"
                  id="expiryDate"
                  name="expiryDate"
                  className="input"
                  placeholder="MM/AA"
                  value={formData.expiryDate}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="cvv" className="block text-sm font-medium text-text mb-1">
                  CVV
                </label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  className="input"
                  placeholder="000"
                  value={formData.cvv}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="promoCode" className="block text-sm font-medium text-text mb-1">
                Código Promocional (opcional)
              </label>
              <input
                type="text"
                id="promoCode"
                name="promoCode"
                className="input"
                value={formData.promoCode}
                onChange={handleInputChange}
              />
            </div>

            <button
              type="submit"
              className="btn-accent w-full py-3 flex items-center justify-center"
              disabled={loading}
            >
              <CreditCard className="w-5 h-5 mr-2" />
              {loading ? 'Processando...' : 'Finalizar Pagamento'}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-text-light">
            <p>Pagamento seguro processado pelo Stripe</p>
            <p className="mt-2">
              Ao finalizar, você concorda com nossos{' '}
              <a href="/termos" className="text-accent hover:underline">
                Termos de Uso
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanCheckoutPage;