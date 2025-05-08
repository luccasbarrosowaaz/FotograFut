import { Link } from 'react-router-dom';
import { Camera, Image } from 'lucide-react';
import { mockPhotographers } from '../../lib/mockData';

const PhotographerSpotlight = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Fotógrafos em Destaque</h2>
          <p className="text-text-light max-w-2xl mx-auto">
            Conheça os talentosos fotógrafos que fazem parte da nossa plataforma e capturam 
            os momentos mais emocionantes do esporte.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mockPhotographers.map((photographer) => (
            <div key={photographer.id} className="card overflow-hidden">
              {/* Cover image */}
              <div className="h-40 overflow-hidden">
                <img
                  src={photographer.coverUrl}
                  alt={`${photographer.name} cover`}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Profile information */}
              <div className="px-5 pt-12 pb-5 text-center relative">
                {/* Avatar */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white">
                    <img
                      src={photographer.avatarUrl}
                      alt={photographer.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-2">{photographer.name}</h3>
                <p className="text-text-light mb-4 line-clamp-3">{photographer.bio}</p>
                
                <div className="flex justify-center gap-4 mb-4">
                  <div className="flex flex-col items-center">
                    <div className="flex items-center gap-1 text-accent font-medium">
                      <Camera className="w-4 h-4" />
                      <span>{photographer.albums.length}</span>
                    </div>
                    <span className="text-xs text-text-light">Álbuns</span>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="flex items-center gap-1 text-accent font-medium">
                      <Image className="w-4 h-4" />
                      <span>{photographer.albums.reduce((total, album) => total + album.photos.length, 0)}</span>
                    </div>
                    <span className="text-xs text-text-light">Fotos</span>
                  </div>
                </div>
                
                <Link 
                  to={`/fotografo/${photographer.slug}`} 
                  className="btn-outline w-full"
                >
                  Ver Perfil
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/fotografos" className="btn-primary">
            Ver Todos os Fotógrafos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PhotographerSpotlight;