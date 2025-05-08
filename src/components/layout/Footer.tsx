import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-white mb-4">O Jogo Photo Press</h3>
            <p className="text-gray-300 mb-4">
              Marketplace de fotografia esportiva profissional para fotógrafos e entusiastas 
              do esporte. Encontre e venda fotos de alta qualidade dos melhores eventos esportivos do Brasil.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com" className="text-white hover:text-accent transition-colors">
                <Facebook />
              </a>
              <a href="https://instagram.com" className="text-white hover:text-accent transition-colors">
                <Instagram />
              </a>
              <a href="https://twitter.com" className="text-white hover:text-accent transition-colors">
                <Twitter />
              </a>
              <a href="https://youtube.com" className="text-white hover:text-accent transition-colors">
                <Youtube />
              </a>
            </div>
          </div>
          
          {/* Links Section */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/albuns" className="text-gray-300 hover:text-accent transition-colors">
                  Álbuns
                </Link>
              </li>
              <li>
                <Link to="/fotografos" className="text-gray-300 hover:text-accent transition-colors">
                  Fotógrafos
                </Link>
              </li>
              <li>
                <Link to="/cadastro/fotografo" className="text-gray-300 hover:text-accent transition-colors">
                  Seja um Fotógrafo
                </Link>
              </li>
              <li>
                <Link to="/termos" className="text-gray-300 hover:text-accent transition-colors">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link to="/privacidade" className="text-gray-300 hover:text-accent transition-colors">
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Section */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Contato</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-300">
                <Mail size={16} className="text-accent" />
                <a href="mailto:contato@ojogophoto.com.br" className="hover:text-accent transition-colors">
                  contato@ojogophoto.com.br
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Phone size={16} className="text-accent" />
                <a href="tel:+551140028922" className="hover:text-accent transition-colors">
                  (11) 4002-8922
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <h4 className="text-lg font-bold text-white mb-2">Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="px-3 py-2 text-primary rounded-l-md focus:outline-none w-full"
                />
                <button className="bg-accent text-primary px-4 py-2 rounded-r-md font-medium hover:bg-accent-light transition-colors">
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} O Jogo Photo Press. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;