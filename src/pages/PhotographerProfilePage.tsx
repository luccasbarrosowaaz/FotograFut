import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Camera, Image, Calendar, MapPin } from 'lucide-react';
import { mockPhotographers } from '../lib/mockData';
import { Photographer } from '../lib/types';
import LoadingSpinner from '../components/ui/LoadingSpinner';

const PhotographerProfilePage: React.FC = () => {
  const { photographerId } = useParams<{ photographerId: string }>();
  const [photographer, setPhotographer] = useState<Photographer | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      const foundPhotographer = mockPhotographers.find(p => p.id === photographerId);
      if (foundPhotographer) {
        setPhotographer(foundPhotographer);
        document.title = `${foundPhotographer.name} | O Jogo Photo Press`;
      }
      setLoading(false);
    }, 500);
  }, [photographerId]);
  
  // Format date function
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).format(date);
  };
  
  if (loading) return <LoadingSpinner />;
  
  if (!photographer) {
    return (
      <div className="container-custom py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Fotógrafo não encontrado</h2>
        <p className="text-text-light mb-6">
          O fotógrafo que você está procurando não existe ou foi removido.
        </p>
        <Link to="/fotografos" className="btn-primary">
          Ver Todos os Fotógrafos
        </Link>
      </div>
    );
  }
  
  return (
    <>
      {/* Profile Header */}
      <div className="relative h-64">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${photographer.coverUrl})` }}
        >
          <div className="absolute inset-0 bg-primary/70"></div>
        </div>
      </div>
      
      <div className="container-custom">
        {/* Profile Info */}
        <div className="relative -mt-20 bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            {/* Avatar */}
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img
                src={photographer.avatarUrl}
                alt={photographer.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Info */}
            <div className="flex-grow text-center md:text-left">
              <h1 className="text-3xl font-bold mb-2">{photographer.name}</h1>
              <p className="text-text-light mb-4 max-w-2xl">{photographer.bio}</p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-6">
                <div className="flex items-center">
                  <Camera className="w-5 h-5 text-accent mr-2" />
                  <div>
                    <span className="block font-bold">{photographer.albums.length}</span>
                    <span className="text-sm text-text-light">Álbuns</span>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Image className="w-5 h-5 text-accent mr-2" />
                  <div>
                    <span className="block font-bold">
                      {photographer.albums.reduce((total, album) => total + album.photos.length, 0)}
                    </span>
                    <span className="text-sm text-text-light">Fotos</span>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-accent mr-2" />
                  <div>
                    <span className="block font-bold">
                      {formatDate(photographer.createdAt)}
                    </span>
                    <span className="text-sm text-text-light">Membro desde</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Albums Grid */}
        <section className="py-8">
          <h2 className="text-2xl font-bold mb-6">Álbuns ({photographer.albums.length})</h2>
          
          {photographer.albums.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {photographer.albums.map((album) => (
                <div key={album.id} className="card group">
                  <Link to={`/albuns/${album.id}`} className="block">
                    <div className="relative h-56 overflow-hidden">
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
          ) : (
            <div className="text-center py-12 bg-white rounded-lg shadow">
              <Camera className="h-12 w-12 mx-auto text-text-light mb-4" />
              <h3 className="text-lg font-medium mb-2">Nenhum álbum publicado</h3>
              <p className="text-text-light">
                Este fotógrafo ainda não publicou nenhum álbum.
              </p>
            </div>
          )}
        </section>
      </div>
    </>
  );
};

export default PhotographerProfilePage;