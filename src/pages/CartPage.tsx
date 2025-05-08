import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Trash2, ArrowLeft } from 'lucide-react';
import { useCartStore, useAuthStore } from '../lib/store';

const CartPage: React.FC = () => {
  const { items, removeItem, clearCart, getTotalPrice } = useCartStore();
  const { isAuthenticated } = useAuthStore();
  const navigate = useNavigate();
  
  useEffect(() => {
    document.title = 'Carrinho de Compras | O Jogo Photo Press';
  }, []);
  
  const handleCheckout = () => {
    if (!isAuthenticated) {
      // Redirect to login if not authenticated
      navigate('/entrar?redirect=checkout');
    } else {
      // Proceed to checkout
      navigate('/checkout');
    }
  };
  
  return (
    <div className="py-12 bg-background min-h-screen">
      <div className="container-custom">
        <div className="flex items-center mb-8">
          <Link to="/albuns" className="flex items-center text-primary hover:text-accent transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span>Continuar Comprando</span>
          </Link>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart items */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h1 className="text-2xl font-bold mb-6 flex items-center">
                <ShoppingCart className="mr-2" />
                Seu Carrinho
              </h1>
              
              {items.length > 0 ? (
                <>
                  <ul className="divide-y divide-gray-200">
                    {items.map((item) => (
                      <li key={item.id} className="py-4 flex flex-col sm:flex-row items-start sm:items-center">
                        <div className="w-20 h-20 flex-shrink-0 bg-gray-100 rounded-md overflow-hidden mr-4 mb-4 sm:mb-0">
                          <img 
                            src={item.thumbnailUrl} 
                            alt={item.title} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        <div className="flex-grow">
                          <h3 className="font-medium">{item.title}</h3>
                          <p className="text-text-light text-sm mt-1">ID: {item.photoId.substring(0, 8)}</p>
                        </div>
                        
                        <div className="mt-4 sm:mt-0 flex justify-between items-center w-full sm:w-auto sm:ml-4">
                          <span className="font-bold text-lg">R$ {item.price.toFixed(2)}</span>
                          <button 
                            className="ml-4 text-error hover:text-error-light transition-colors"
                            onClick={() => removeItem(item.id)}
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-6 flex justify-between">
                    <button 
                      className="text-text-light hover:text-accent transition-colors"
                      onClick={clearCart}
                    >
                      Limpar Carrinho
                    </button>
                    <span className="text-sm font-medium">{items.length} {items.length === 1 ? 'item' : 'itens'}</span>
                  </div>
                </>
              ) : (
                <div className="text-center py-10">
                  <ShoppingCart className="h-12 w-12 mx-auto text-text-light mb-4" />
                  <h3 className="text-lg font-medium mb-2">Seu carrinho está vazio</h3>
                  <p className="text-text-light mb-6">
                    Parece que você ainda não adicionou nenhuma foto ao seu carrinho.
                  </p>
                  <Link to="/albuns" className="btn-primary">
                    Explorar Álbuns
                  </Link>
                </div>
              )}
            </div>
          </div>
          
          {/* Order summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-6">Resumo do Pedido</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-text-light">Subtotal ({items.length} {items.length === 1 ? 'item' : 'itens'})</span>
                  <span>R$ {getTotalPrice().toFixed(2)}</span>
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>R$ {getTotalPrice().toFixed(2)}</span>
                  </div>
                  <p className="text-text-light text-sm mt-1">
                    Você receberá arquivos em alta resolução, sem marca d'água.
                  </p>
                </div>
              </div>
              
              <button
                className="btn-accent w-full py-3 mt-6"
                disabled={items.length === 0}
                onClick={handleCheckout}
              >
                Finalizar Compra
              </button>
              
              <div className="mt-4 text-center text-sm text-text-light">
                <p>Pagamento seguro via:</p>
                <div className="flex justify-center items-center mt-2 space-x-2">
                  <span className="font-medium">Mercado Pago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;