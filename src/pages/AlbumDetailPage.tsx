import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, MapPin, User, Tag, ShoppingCart, Eye, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { mockAlbums } from '../lib/mockData';
import { Album, Photo } from '../lib/types';
import { useCartStore } from '../lib/store';
import LoadingSpinner from '../components/ui/LoadingSpinner';

const AlbumDetailPage: React.FC = () => {
  const { albumId } = useParams<{ albumId: string }>();
  const [album, setAlbum] = useState<Album | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [photoViewerOpen, setPhotoViewerOpen] = useState(false);
  
  const { addItem } = useCartStore();
  
  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      const foundAlbum = mockAlbums.find(a => a.id === albumId);
      if (foundAlbum) {
        setAlbum(foundAlbum);
        document.title = `${foundAlbum.title} | O Jogo Photo Press`;
      }
      setLoading(false);
    }, 500);
  }, [albumId]);
  
  // Format date function
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).format(date);
  };
  
  const openPhotoViewer = (photo: Photo) => {
    setSelectedPhoto(photo);
    setPhotoViewerOpen(true);
    document.body.style.overflow = 'hidden';
  };
  
  const closePhotoViewer = () => {
    setPhotoViewerOpen(false);
    document.body.style.overflow = 'auto';
  };
  
  const navigatePhoto = (direction: 'prev' | 'next') => {
    if (!album || !selectedPhoto) return;
    
    const currentIndex = album.photos.findIndex(photo => photo.id === selectedPhoto.id);
    const newIndex = direction === 'prev' 
      ? (currentIndex - 1 + album.photos.length) % album.photos.length
      : (currentIndex + 1) % album.photos.length;
      
    setSelectedPhoto(album.photos[newIndex]);
  };
  
  const addToCart = (photo: Photo) => {
    addItem({
      photoId: photo.id,
      albumId: photo.albumId,
      photographerId: photo.photographerId,
      title: photo.title,
      thumbnailUrl: photo.thumbnailUrl,
      price: photo.price
    });
    
    // Show notification (could be enhanced with a toast library)
    alert('Foto adicionada ao carrinho!');
  };
  
  if (loading) return <LoadingSpinner />;
  
  if (!album) {
    return (
      <div className="container-custom py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Álbum não encontrado</h2>
        <p className="text-text-light mb-6">
          O álbum que você está procurando não existe ou foi removido.
        </p>
        <Link to="/albuns" className="btn-primary">
          Ver Todos os Álbuns
        </Link>
      </div>
    );
  }
  
  return (
    <>
      {/* Album Hero Section */}
      <div className="relative h-80 md:h-96">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${album.coverUrl})` }}
        >
          <div className="absolute inset-0 bg-primary/70"></div>
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="container-custom">
            <div className="max-w-3xl">
              <span className="inline-block bg-accent text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                {album.category}
              </span>
              <h1 className="text-white mb-4">{album.title}</h1>
              <p className="text-white/90 mb-6">{album.description}</p>
              
              <div className="flex flex-wrap gap-y-2 gap-x-4 text-white/80 text-sm font-medium">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{formatDate(album.date)}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{album.location}</span>
                </div>
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  <Link to={`/fotografo/${album.photographerId}`} className="hover:text-white">
                    {album.photographerName}
                  </Link>
                </div>
                <div className="flex items-center">
                  <Tag className="w-4 h-4 mr-2" />
                  <span>{album.photos.length} fotos</span>
                </div>
                <div className="flex items-center">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  <span>R$ {album.price.toFixed(2)} por foto</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Photo Grid */}
      <section className="py-12 bg-background">
        <div className="container-custom">
          <h2 className="text-2xl font-bold mb-6">Fotos ({album.photos.length})</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {album.photos.map((photo) => (
              <div key={photo.id} className="photo-card group relative">
                {/* Thumbnail with watermark */}
                <div className="relative aspect-square overflow-hidden cursor-pointer" onClick={() => openPhotoViewer(photo)}>
                  <img 
                    src={photo.thumbnailUrl} 
                    alt={photo.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Watermark */}
                  <div className="watermark">
                    <p className="text-white font-bold text-lg opacity-60 rotate-[-30deg]">
                      {album.photographerName}
                    </p>
                  </div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Eye className="text-white h-8 w-8" />
                  </div>
                </div>
                
                {/* Add to cart button */}
                <button 
                  className="absolute bottom-0 left-0 right-0 bg-accent text-primary py-2 font-medium flex items-center justify-center gap-1 translate-y-full group-hover:translate-y-0 transition-transform"
                  onClick={() => addToCart(photo)}
                >
                  <ShoppingCart className="h-4 w-4" />
                  <span>Adicionar</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Photo Viewer Modal */}
      {photoViewerOpen && selectedPhoto && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
          {/* Close button */}
          <button 
            className="absolute top-4 right-4 text-white hover:text-accent z-10"
            onClick={closePhotoViewer}
          >
            <X className="h-8 w-8" />
          </button>
          
          {/* Navigation buttons */}
          <button 
            className="absolute left-4 text-white hover:text-accent z-10"
            onClick={() => navigatePhoto('prev')}
          >
            <ChevronLeft className="h-10 w-10" />
          </button>
          
          <button 
            className="absolute right-4 text-white hover:text-accent z-10"
            onClick={() => navigatePhoto('next')}
          >
            <ChevronRight className="h-10 w-10" />
          </button>
          
          {/* Image container */}
          <div className="relative max-w-6xl max-h-[80vh] w-full mx-4">
            <img 
              src={selectedPhoto.thumbnailUrl} 
              alt={selectedPhoto.title}
              className="max-w-full max-h-[70vh] mx-auto object-contain"
            />
            
            {/* Watermark */}
            <div className="watermark">
              <p className="text-white font-bold text-4xl opacity-60 rotate-[-30deg]">
                {album.photographerName}
              </p>
            </div>
            
            {/* Photo info and actions */}
            <div className="bg-white p-4 mt-4 rounded-md">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-lg">{selectedPhoto.title}</h3>
                <span className="font-bold">R$ {selectedPhoto.price.toFixed(2)}</span>
              </div>
              
              <button 
                className="btn-accent w-full mt-3"
                onClick={() => addToCart(selectedPhoto)}
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                Adicionar ao Carrinho
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AlbumDetailPage;