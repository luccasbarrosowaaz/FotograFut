import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold text-white mb-4">FOTOGRAFUT</h3>
            <p className="text-gray-300 mb-4">
              Marketplace de fotografia esportiva profissional para fotógrafos e entusiastas 
              do esporte. Encontre e venda fotos de alta qualidade dos melhores eventos esportivos do Brasil.
            </p>
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
                <a href="mailto:contato@fotografut.com.br" className="hover:text-accent transition-colors">
                  contato@fotografut.com.br
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Phone size={16} className="text-accent" />
                <a 
                  href="https://wa.me/5513991835083?text=vim%20da%20fotografut%2C%20gostaria%20de%20falar%20sobre"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  +55 13 99183-5083
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} FOTOGRAFUT. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;