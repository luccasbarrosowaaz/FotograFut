import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, User, Search, Filter, ArrowDown, ArrowUp } from 'lucide-react';
import { mockAlbums } from '../lib/mockData';
import { Album } from '../lib/types';

type SortOption = 'newest' | 'oldest' | 'price-asc' | 'price-desc';

const AlbumsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [albums, setAlbums] = useState<Album[]>(mockAlbums);
  const [sortOption, setSortOption] = useState<SortOption>('newest');
  const [categoryFilter, setCategoryFilter] = useState('');
  
  useEffect(() => {
    document.title = 'Álbuns de Fotos Esportivas | O Jogo Photo Press';
    
    // Apply filters and sorting
    let filteredAlbums = [...mockAlbums];
    
    // Apply search
    if (searchTerm) {
      const searchRegex = new RegExp(searchTerm, 'i');
      filteredAlbums = filteredAlbums.filter(album => 
        searchRegex.test(album.title) || 
        searchRegex.test(album.description) || 
        searchRegex.test(album.location) ||
        searchRegex.test(album.category) ||
        album.tags.some(tag => searchRegex.test(tag))
      );
    }
    
    // Apply category filter
    if (categoryFilter) {
      filteredAlbums = filteredAlbums.filter(album => album.category === categoryFilter);
    }
    
    // Apply sorting
    filteredAlbums.sort((a, b) => {
      switch (sortOption) {
        case 'newest':
          return b.date.getTime() - a.date.getTime();
        case 'oldest':
          return a.date.getTime() - b.date.getTime();
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        default:
          return 0;
      }
    });
    
    setAlbums(filteredAlbums);
    
  }, [searchTerm, sortOption, categoryFilter]);
  
  // Format date function
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).format(date);
  };
  
  // Get unique categories
  const categories = Array.from(new Set(mockAlbums.map(album => album.category)));
  
  return (
    <>
      {/* Page Header */}
      <div className="bg-primary py-12">
        <div className="container-custom">
          <h1 className="text-white text-center">Álbuns de Fotos</h1>
          <p className="text-white/80 text-center max-w-2xl mx-auto mt-4">
            Encontre os melhores momentos dos eventos esportivos capturados por nossos fotógrafos profissionais.
          </p>
        </div>
      </div>
      
      {/* Filters Section */}
      <div className="bg-white shadow">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="w-full md:w-auto flex-grow max-w-md relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Buscar por álbuns, times, campeonatos..."
                className="input pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4">
              {/* Category Filter */}
              <div className="relative">
                <select
                  className="input appearance-none pr-10"
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                >
                  <option value="">Todas Categorias</option>
                  {categories.map((category, index) => (
                    <option key={index} value={category}>{category}</option>
                  ))}
                </select>
                <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
              </div>
              
              {/* Sort Options */}
              <div className="relative">
                <select
                  className="input appearance-none pr-10"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value as SortOption)}
                >
                  <option value="newest">Mais Recentes</option>
                  <option value="oldest">Mais Antigos</option>
                  <option value="price-asc">Preço: Menor para Maior</option>
                  <option value="price-desc">Preço: Maior para Menor</option>
                </select>
                {sortOption.includes('asc') ? (
                  <ArrowUp className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                ) : (
                  <ArrowDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Albums Grid */}
      <section className="py-12 bg-background">
        <div className="container-custom">
          {albums.length > 0 ? (
            <>
              <p className="mb-6 text-text-light">Mostrando {albums.length} álbuns</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {albums.map((album) => (
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
            </>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-bold mb-2">Nenhum álbum encontrado</h3>
              <p className="text-text-light mb-6">
                Tente ajustar seus filtros ou buscar por outro termo.
              </p>
              <button 
                className="btn-primary"
                onClick={() => {
                  setSearchTerm('');
                  setCategoryFilter('');
                  setSortOption('newest');
                }}
              >
                Limpar Filtros
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default AlbumsPage;