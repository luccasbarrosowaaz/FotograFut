import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Download, ShoppingBag, User, CreditCard, LogOut } from 'lucide-react';
import { useAuthStore } from '../../lib/store';

// Mock purchases data
const mockPurchases = [
  {
    id: '1',
    date: new Date('2024-04-10'),
    photos: 5,
    total: 125.00,
    status: 'completed',
    items: [
      {
        id: '101',
        thumbnailUrl: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=600',
        title: 'Santos vs Corinthians - Foto 1',
        photographerName: 'Carlos Silva',
        downloadUrl: '#'
      },
      {
        id: '102',
        thumbnailUrl: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=600',
        title: 'Santos vs Corinthians - Foto 2',
        photographerName: 'Carlos Silva',
        downloadUrl: '#'
      }
    ]
  },
  {
    id: '2',
    date: new Date('2024-03-22'),
    photos: 3,
    total: 90.00,
    status: 'completed',
    items: [
      {
        id: '201',
        thumbnailUrl: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=600',
        title: 'Flamengo vs São Paulo - Foto 3',
        photographerName: 'Amanda Oliveira',
        downloadUrl: '#'
      },
      {
        id: '202',
        thumbnailUrl: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=600',
        title: 'Flamengo vs São Paulo - Foto 5',
        photographerName: 'Amanda Oliveira',
        downloadUrl: '#'
      }
    ]
  }
];

const CustomerDashboardPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('purchases');
  const [selectedPurchase, setSelectedPurchase] = useState<string | null>(null);
  
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();
  
  useEffect(() => {
    document.title = 'Painel do Cliente | O Jogo Photo Press';
    
    // Check if user is authenticated and is a customer
    if (!user || user.role !== 'customer') {
      navigate('/entrar');
    }
  }, [user, navigate]);
  
  const handleLogout = () => {
    logout();
    navigate('/');
  };
  
  // Format date function
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).format(date);
  };
  
  const togglePurchaseDetails = (purchaseId: string) => {
    if (selectedPurchase === purchaseId) {
      setSelectedPurchase(null);
    } else {
      setSelectedPurchase(purchaseId);
    }
  };
  
  if (!user) return null;
  
  return (
    <div className="py-12 bg-background min-h-screen">
      <div className="container-custom">
        <h1 className="text-3xl font-bold mb-8">Painel do Cliente</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                  {user.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h2 className="font-bold text-lg">{user.name}</h2>
                  <p className="text-text-light text-sm">{user.email}</p>
                </div>
              </div>
              
              <nav className="space-y-1">
                <button
                  className={`w-full flex items-center p-3 rounded-md transition-colors ${
                    activeTab === 'purchases' 
                      ? 'bg-primary text-white' 
                      : 'hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveTab('purchases')}
                >
                  <ShoppingBag className="w-5 h-5 mr-3" />
                  <span>Minhas Compras</span>
                </button>
                <button
                  className={`w-full flex items-center p-3 rounded-md transition-colors ${
                    activeTab === 'profile' 
                      ? 'bg-primary text-white' 
                      : 'hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveTab('profile')}
                >
                  <User className="w-5 h-5 mr-3" />
                  <span>Meu Perfil</span>
                </button>
                <button
                  className={`w-full flex items-center p-3 rounded-md transition-colors ${
                    activeTab === 'payments' 
                      ? 'bg-primary text-white' 
                      : 'hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveTab('payments')}
                >
                  <CreditCard className="w-5 h-5 mr-3" />
                  <span>Pagamentos</span>
                </button>
              </nav>
              
              <button
                className="w-full flex items-center p-3 text-error hover:bg-error/10 rounded-md mt-6 transition-colors"
                onClick={handleLogout}
              >
                <LogOut className="w-5 h-5 mr-3" />
                <span>Sair</span>
              </button>
            </div>
          </div>
          
          {/* Main content */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-lg shadow-md p-6">
              {/* Purchases tab */}
              {activeTab === 'purchases' && (
                <div>
                  <h2 className="text-xl font-bold mb-6">Minhas Compras</h2>
                  
                  {mockPurchases.length > 0 ? (
                    <div className="space-y-4">
                      {mockPurchases.map((purchase) => (
                        <div 
                          key={purchase.id} 
                          className="border border-gray-200 rounded-lg overflow-hidden"
                        >
                          {/* Purchase header */}
                          <div 
                            className="bg-gray-50 p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between cursor-pointer"
                            onClick={() => togglePurchaseDetails(purchase.id)}
                          >
                            <div>
                              <div className="flex items-center mb-2">
                                <span className="font-medium">Pedido #{purchase.id}</span>
                                <span className="ml-3 px-2 py-1 text-xs font-medium bg-success/20 text-success rounded-full">
                                  Completo
                                </span>
                              </div>
                              <div className="text-sm text-text-light">
                                <span>{formatDate(purchase.date)}</span>
                                <span className="mx-2">•</span>
                                <span>{purchase.photos} fotos</span>
                                <span className="mx-2">•</span>
                                <span>R$ {purchase.total.toFixed(2)}</span>
                              </div>
                            </div>
                            <button className="mt-3 sm:mt-0 text-accent hover:text-accent-light transition-colors text-sm font-medium">
                              {selectedPurchase === purchase.id ? 'Ocultar detalhes' : 'Ver detalhes'}
                            </button>
                          </div>
                          
                          {/* Purchase details */}
                          {selectedPurchase === purchase.id && (
                            <div className="p-4 border-t border-gray-200">
                              <h3 className="font-medium mb-3">Fotos compradas:</h3>
                              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {purchase.items.map((item) => (
                                  <div key={item.id} className="border border-gray-200 rounded-md overflow-hidden">
                                    <div className="relative aspect-square">
                                      <img 
                                        src={item.thumbnailUrl} 
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                      />
                                    </div>
                                    <div className="p-3">
                                      <h4 className="font-medium text-sm line-clamp-1">{item.title}</h4>
                                      <p className="text-text-light text-xs mt-1">{item.photographerName}</p>
                                      <a 
                                        href={item.downloadUrl} 
                                        className="btn-primary mt-3 w-full flex items-center justify-center text-sm"
                                      >
                                        <Download className="w-4 h-4 mr-1" />
                                        Baixar
                                      </a>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <ShoppingBag className="h-12 w-12 mx-auto text-text-light mb-4" />
                      <h3 className="text-lg font-medium mb-2">Nenhuma compra realizada</h3>
                      <p className="text-text-light mb-6">
                        Você ainda não realizou nenhuma compra na plataforma.
                      </p>
                      <Link to="/albuns" className="btn-primary">
                        Explorar Álbuns
                      </Link>
                    </div>
                  )}
                </div>
              )}
              
              {/* Profile tab */}
              {activeTab === 'profile' && (
                <div>
                  <h2 className="text-xl font-bold mb-6">Meu Perfil</h2>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-text mb-1">
                          Nome
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="input"
                          defaultValue={user.name}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-text mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="input"
                          defaultValue={user.email}
                          disabled
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-text mb-1">
                          Telefone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          className="input"
                          placeholder="(00) 00000-0000"
                        />
                      </div>
                      <div>
                        <label htmlFor="cpf" className="block text-sm font-medium text-text mb-1">
                          CPF
                        </label>
                        <input
                          type="text"
                          id="cpf"
                          className="input"
                          placeholder="000.000.000-00"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-medium text-lg mb-3 mt-6">Alterar Senha</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="currentPassword" className="block text-sm font-medium text-text mb-1">
                            Senha Atual
                          </label>
                          <input
                            type="password"
                            id="currentPassword"
                            className="input"
                          />
                        </div>
                        <div>
                          <label htmlFor="newPassword" className="block text-sm font-medium text-text mb-1">
                            Nova Senha
                          </label>
                          <input
                            type="password"
                            id="newPassword"
                            className="input"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <button
                        type="submit"
                        className="btn-primary"
                      >
                        Salvar Alterações
                      </button>
                    </div>
                  </form>
                </div>
              )}
              
              {/* Payments tab */}
              {activeTab === 'payments' && (
                <div>
                  <h2 className="text-xl font-bold mb-6">Métodos de Pagamento</h2>
                  
                  <div className="bg-primary/5 p-4 rounded-md mb-6">
                    <p className="text-sm">
                      Utilizamos o Mercado Pago como nossa plataforma de pagamento seguro.
                      Seus dados de cartão não são armazenados em nossos servidores.
                    </p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4 mb-6">
                    <h3 className="font-medium mb-3">Cartões Salvos</h3>
                    <p className="text-text-light text-sm">
                      Você não possui cartões salvos. Os cartões são adicionados durante o processo de checkout.
                    </p>
                  </div>
                  
                  <h3 className="font-medium mb-3">Histórico de Pagamentos</h3>
                  
                  <div className="border-t border-gray-200">
                    {mockPurchases.map((purchase) => (
                      <div 
                        key={purchase.id} 
                        className="py-4 border-b border-gray-200 flex justify-between items-center"
                      >
                        <div>
                          <p className="font-medium">Pedido #{purchase.id}</p>
                          <p className="text-text-light text-sm">{formatDate(purchase.date)}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold">R$ {purchase.total.toFixed(2)}</p>
                          <p className="text-success text-sm">Aprovado</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboardPage;