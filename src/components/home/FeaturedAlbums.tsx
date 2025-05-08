import { Link } from 'react-router-dom';
import { Calendar, MapPin, User } from 'lucide-react';
import { mockAlbums } from '../../lib/mockData';

const FeaturedAlbums = () => {
  // Format date function
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).format(date);
  };

  return (
    <section className="py-16 bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Álbuns em Destaque</h2>
          <p className="text-text-light max-w-2xl mx-auto">
            Confira os álbuns mais recentes dos principais eventos esportivos, 
            capturados pelos melhores fotógrafos profissionais.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockAlbums.map((album) => (
            <div key={album.id} className="card group">
              <Link to={`/albuns/${album.id}`} className="block">
                <div className="relative h-60 overflow-hidden">
                  <img 
                    src={album.coverUrl} 
                    alt={album.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block bg-accent text-primary text-sm font-medium px-3 py-1 rounded-full mb-2">
                      {album.category}
                    </span>
                    <h3 className="text-white text-xl font-bold line-clamp-2">{album.title}</h3>
                  </div>
                </div>
              </Link>
              
              <div className="p-5">
                <div className="flex flex-wrap items-center gap-3 text-sm text-text-light mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{formatDate(album.date)}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="truncate max-w-[150px]">{album.location}</span>
                  </div>
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    <span>{album.photographerName}</span>
                  </div>
                </div>
                
                <p className="text-text-light line-clamp-2 mb-4">{album.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="font-bold text-lg">
                    R$ {album.price.toFixed(2)} <span className="text-sm font-normal text-text-light">/ foto</span>
                  </span>
                  <Link 
                    to={`/albuns/${album.id}`} 
                    className="btn-outline"
                  >
                    Ver Fotos
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/albuns" className="btn-primary">
            Ver Todos os Álbuns
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedAlbums;