import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, CreditCard, CheckCircle2, ShoppingCart } from 'lucide-react';
import { useCartStore, useAuthStore } from '../lib/store';

interface CheckoutFormData {
  fullName: string;
  email: string;
  cpf: string;
  cardNumber: string;
  cardHolder: string;
  expiryDate: string;
  cvv: string;
}

const initialFormData: CheckoutFormData = {
  fullName: '',
  email: '',
  cpf: '',
  cardNumber: '',
  cardHolder: '',
  expiryDate: '',
  cvv: ''
};

const CheckoutPage: React.FC = () => {
  const [formData, setFormData] = useState<CheckoutFormData>(initialFormData);
  const [loading, setLoading] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');
  
  const { items, getTotalPrice, clearCart } = useCartStore();
  const { isAuthenticated, user } = useAuthStore();
  const navigate = useNavigate();
  
  useEffect(() => {
    document.title = 'Checkout | O Jogo Photo Press';
    
    // Redirect if cart is empty
    if (items.length === 0 && !orderComplete) {
      navigate('/carrinho');
      return;
    }
    
    // Redirect if not authenticated
    if (!isAuthenticated) {
      navigate('/entrar?redirect=checkout');
      return;
    }
    
    // Pre-fill user data if available
    if (user) {
      setFormData(prev => ({
        ...prev,
        fullName: user.name,
        email: user.email
      }));
    }
  }, [isAuthenticated, items.length, navigate, orderComplete, user]);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate payment processing
    setTimeout(() => {
      // Generate random order number
      const randomOrderNumber = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
      setOrderNumber(randomOrderNumber);
      setOrderComplete(true);
      clearCart();
      setLoading(false);
    }, 2000);
  };
  
  if (orderComplete) {
    return (
      <div className="py-12 bg-background min-h-screen">
        <div className="container-custom max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="flex justify-center mb-4">
              <CheckCircle2 className="h-16 w-16 text-success" />
            </div>
            <h1 className="text-2xl font-bold mb-2">Pedido Confirmado!</h1>
            <p className="text-text-light mb-6">
              Seu pedido #{orderNumber} foi processado com sucesso.
            </p>
            
            <div className="bg-success/10 p-4 rounded-md mb-6">
              <p className="text-success font-medium">
                Um email com os links para download das fotos foi enviado para o seu endereço de email cadastrado.
              </p>
            </div>
            
            <p className="text-text-light mb-8">
              Você também pode acessar suas fotos na sua área de cliente a qualquer momento.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/cliente/painel" className="btn-primary">
                Ir para Minha Conta
              </Link>
              <Link to="/albuns" className="btn-outline">
                Continuar Navegando
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="py-12 bg-background min-h-screen">
      <div className="container-custom">
        <div className="flex items-center mb-8">
          <Link to="/carrinho" className="flex items-center text-primary hover:text-accent transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span>Voltar para o Carrinho</span>
          </Link>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Checkout form */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h1 className="text-2xl font-bold mb-6">Finalizar Compra</h1>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-8">
                  <h2 className="text-lg font-bold mb-4">Informações Pessoais</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-text mb-1">
                        Nome Completo
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        className="input"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-text mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="input"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="cpf" className="block text-sm font-medium text-text mb-1">
                        CPF
                      </label>
                      <input
                        type="text"
                        id="cpf"
                        name="cpf"
                        className="input"
                        placeholder="000.000.000-00"
                        value={formData.cpf}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h2 className="text-lg font-bold mb-4 flex items-center">
                    <CreditCard className="mr-2 h-5 w-5" />
                    Dados de Pagamento
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
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
                          Validade
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
                  </div>
                </div>
                
                <div className="mt-8 text-center md:text-left">
                  <button
                    type="submit"
                    className="btn-accent py-3 px-8"
                    disabled={loading}
                  >
                    {loading ? 'Processando...' : 'Confirmar Pagamento'}
                  </button>
                </div>
              </form>
            </div>
          </div>
          
          {/* Order summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-6 flex items-center">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Resumo do Pedido
              </h2>
              
              <div className="divide-y divide-gray-200">
                {items.map((item) => (
                  <div key={item.id} className="py-3 flex items-start">
                    <div className="w-12 h-12 flex-shrink-0 bg-gray-100 rounded-md overflow-hidden mr-3">
                      <img 
                        src={item.thumbnailUrl} 
                        alt={item.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-grow">
                      <h4 className="text-sm font-medium line-clamp-1">{item.title}</h4>
                      <p className="text-xs text-text-light mt-1">ID: {item.photoId.substring(0, 8)}</p>
                    </div>
                    
                    <span className="text-sm font-bold ml-2">
                      R$ {item.price.toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 space-y-4">
                <div className="flex justify-between">
                  <span className="text-text-light">Subtotal ({items.length} {items.length === 1 ? 'item' : 'itens'})</span>
                  <span>R$ {getTotalPrice().toFixed(2)}</span>
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>R$ {getTotalPrice().toFixed(2)}</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 bg-primary/5 p-4 rounded-md text-sm">
                <p className="font-medium mb-2">O que está incluído:</p>
                <ul className="space-y-1 text-text-light">
                  <li>• Fotos em alta resolução sem marca d'água</li>
                  <li>• Download imediato após confirmação do pagamento</li>
                  <li>• Acesso permanente às suas compras</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;