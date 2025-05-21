import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Camera, Image, Search, Filter } from 'lucide-react';
import { mockPhotographers } from '../lib/mockData';
import { Photographer } from '../lib/types';

const PhotographersPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [photographers, setPhotographers] = useState<Photographer[]>(mockPhotographers);

  useEffect(() => {
    document.title = 'Fotógrafos | O Jogo Photo Press';

    if (searchTerm) {
      const filtered = mockPhotographers.filter(photographer => 
        photographer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        photographer.bio.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setPhotographers(filtered);
    } else {
      setPhotographers(mockPhotographers);
    }
  }, [searchTerm]);

  return (
    <>
      {/* Hero Section */}
      <div className="bg-primary py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
            Nossos Fotógrafos
          </h1>
          <p className="text-white/80 text-center max-w-3xl mx-auto text-lg">
            Conheça os talentosos profissionais que capturam os momentos mais emocionantes do esporte.
          </p>
        </div>
      </div>

      {/* Search Section */}
      <div className="bg-white shadow">
        <div className="container-custom py-6">
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Buscar fotógrafos..."
                className="input pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Photographers Grid */}
      <section className="py-12 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {photographers.map((photographer) => (
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
                    to={`/fotografo/${photographer.id}`} 
                    className="btn-outline w-full"
                  >
                    Ver Perfil
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {photographers.length === 0 && (
            <div className="text-center py-12">
              <Camera className="h-12 w-12 mx-auto text-text-light mb-4" />
              <h3 className="text-lg font-medium mb-2">Nenhum fotógrafo encontrado</h3>
              <p className="text-text-light">
                Tente ajustar sua busca ou remover os filtros aplicados.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default PhotographersPage;