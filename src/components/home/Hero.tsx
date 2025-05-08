import { Link } from 'react-router-dom';
import { Search, Camera } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=1600')" 
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-primary/70"></div>
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-6 leading-tight animate-fade-in">
          Fotografia Esportiva Profissional
        </h1>
        <p className="text-white/90 text-xl mb-8 animate-fade-in">
          Encontre e compre as melhores fotos dos seus eventos esportivos favoritos, 
          registrados por fotógrafos profissionais.
        </p>
        
        {/* Search bar */}
        <div className="bg-white p-2 rounded-lg flex items-center mb-8 shadow-lg animate-slide-up">
          <Search className="ml-2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar por times, campeonatos, datas..."
            className="flex-grow px-3 py-2 outline-none text-primary"
          />
          <button className="btn-primary rounded-md px-6">Buscar</button>
        </div>
        
        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
          <Link to="/albuns" className="btn-accent rounded-md text-lg px-6 py-3">
            Ver Álbuns
          </Link>
          <Link to="/cadastro/fotografo" className="btn border-2 border-white text-white hover:bg-white hover:text-primary rounded-md text-lg px-6 py-3">
            <Camera className="w-5 h-5 mr-2" />
            Seja um Fotógrafo
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;