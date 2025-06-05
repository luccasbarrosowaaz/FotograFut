import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Camera, Menu, X, ShoppingCart, User } from 'lucide-react';
import { useAuthStore, useCartStore } from '../../lib/store';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { isAuthenticated, user } = useAuthStore();
  const { getItemsCount } = useCartStore();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-[#0A2463] py-4'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Camera className={`h-8 w-8 ${isScrolled ? 'text-accent' : 'text-accent'}`} strokeWidth={2} />
          <span className={`font-bold text-xl ${isScrolled ? 'text-primary' : 'text-white'}`}>
            FOTOGRAFUT
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link 
            to="/seja-fotografo" 
            className={`font-medium transition-colors ${
              isScrolled ? 'text-primary hover:text-accent' : 'text-white hover:text-accent'
            }`}
          >
            Seja um Fotógrafo
          </Link>
          <Link 
            to="/albuns" 
            className={`font-medium transition-colors ${
              isScrolled ? 'text-primary hover:text-accent' : 'text-white hover:text-accent'
            }`}
          >
            Álbuns
          </Link>
          <Link 
            to="/sobre" 
            className={`font-medium transition-colors ${
              isScrolled ? 'text-primary hover:text-accent' : 'text-white hover:text-accent'
            }`}
          >
            Sobre
          </Link>
          <Link 
            to="/contato" 
            className={`font-medium transition-colors ${
              isScrolled ? 'text-primary hover:text-accent' : 'text-white hover:text-accent'
            }`}
          >
            Contato
          </Link>
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <Link 
            to="/carrinho" 
            className={`relative p-2 rounded-full ${
              isScrolled ? 'text-primary hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
          >
            <ShoppingCart className="h-5 w-5" />
            {getItemsCount() > 0 && (
              <span className="absolute -top-1 -right-1 flex items-center justify-center h-5 w-5 rounded-full bg-accent text-primary text-xs font-bold">
                {getItemsCount()}
              </span>
            )}
          </Link>
          
          {isAuthenticated ? (
            <Link 
              to={user?.role === 'photographer' ? '/fotografo/painel' : '/cliente/painel'} 
              className={`flex items-center gap-2 p-2 rounded-full ${
                isScrolled ? 'text-primary hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
            >
              <User className="h-5 w-5" />
              <span className="font-medium">{user?.name.split(' ')[0]}</span>
            </Link>
          ) : (
            <Link 
              to="/entrar" 
              className={`btn px-6 py-2 rounded-full font-medium transition-all ${
                isScrolled 
                  ? 'bg-accent text-white hover:bg-accent-light' 
                  : 'bg-white text-primary hover:bg-white/90'
              }`}
            >
              Entrar
            </Link>
          )}
        </div>
        
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2"
        >
          {isMenuOpen ? (
            <X className={`h-6 w-6 ${isScrolled ? 'text-primary' : 'text-white'}`} />
          ) : (
            <Menu className={`h-6 w-6 ${isScrolled ? 'text-primary' : 'text-white'}`} />
          )}
        </button>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 py-4 animate-fade-in">
          <div className="container-custom flex flex-col space-y-4">
            <Link to="/seja-fotografo" className="font-medium py-2 text-primary hover:text-accent">
              Seja um Fotógrafo
            </Link>
            <Link to="/albuns" className="font-medium py-2 text-primary hover:text-accent">
              Álbuns
            </Link>
            <Link to="/sobre" className="font-medium py-2 text-primary hover:text-accent">
              Sobre
            </Link>
            <Link to="/contato" className="font-medium py-2 text-primary hover:text-accent">
              Contato
            </Link>
            
            <div className="flex items-center space-x-4 pt-2 border-t border-gray-200">
              <Link to="/carrinho" className="relative p-2 rounded-full text-primary">
                <ShoppingCart className="h-5 w-5" />
                {getItemsCount() > 0 && (
                  <span className="absolute -top-1 -right-1 flex items-center justify-center h-5 w-5 rounded-full bg-accent text-primary text-xs font-bold">
                    {getItemsCount()}
                  </span>
                )}
              </Link>
              
              {isAuthenticated ? (
                <Link 
                  to={user?.role === 'photographer' ? '/fotografo/painel' : '/cliente/painel'} 
                  className="flex items-center gap-2 p-2 text-primary"
                >
                  <User className="h-5 w-5" />
                  <span className="font-medium">{user?.name.split(' ')[0]}</span>
                </Link>
              ) : (
                <Link to="/entrar" className="btn-accent w-full text-center py-2">
                  Entrar
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;