import { Album, Photographer } from './types';
import { v4 as uuidv4 } from 'uuid';

// Generate mock photographers
export const mockPhotographers: Photographer[] = [
  {
    id: uuidv4(),
    name: 'Carlos Silva',
    email: 'carlos@example.com',
    role: 'photographer',
    slug: 'carlos-silva',
    bio: 'Fotógrafo esportivo com mais de 10 anos de experiência cobrindo campeonatos de futebol.',
    avatarUrl: 'https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=150',
    coverUrl: 'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    plan: {
      type: 'lifetime',
      commissionRate: 0,
      monthlyFee: 29.9,
      startDate: new Date('2023-01-15'),
    },
    albums: [],
    sales: [],
    balance: 2500,
    createdAt: new Date('2023-01-15'),
  },
  {
    id: uuidv4(),
    name: 'Amanda Oliveira',
    email: 'amanda@example.com',
    role: 'photographer',
    slug: 'amanda-oliveira',
    bio: 'Especializada em fotografia de eventos esportivos e coberturas de competições regionais.',
    avatarUrl: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
    coverUrl: 'https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    plan: {
      type: 'free',
      commissionRate: 30,
      monthlyFee: 0,
      startDate: new Date('2023-03-10'),
    },
    albums: [],
    sales: [],
    balance: 1200,
    createdAt: new Date('2023-03-10'),
  },
  {
    id: uuidv4(),
    name: 'Roberto Mendes',
    email: 'roberto@example.com',
    role: 'photographer',
    slug: 'roberto-mendes',
    bio: 'Fotógrafo com foco em competições esportivas amadoras e profissionais em São Paulo.',
    avatarUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
    coverUrl: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    plan: {
      type: 'lifetime',
      commissionRate: 0,
      monthlyFee: 29.9,
      startDate: new Date('2022-11-05'),
    },
    albums: [],
    sales: [],
    balance: 4300,
    createdAt: new Date('2022-11-05'),
  },
];

// Generate mock albums
export const mockAlbums: Album[] = [
  {
    id: uuidv4(),
    title: 'Campeonato Paulista 2024 - Santos vs Corinthians',
    description: 'Cobertura completa do clássico entre Santos e Corinthians pelo Campeonato Paulista 2024.',
    coverUrl: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    photographerId: mockPhotographers[0].id,
    photographerName: mockPhotographers[0].name,
    price: 25.00,
    date: new Date('2024-03-15'),
    location: 'Estádio Vila Belmiro, Santos',
    tags: ['futebol', 'campeonato paulista', 'santos', 'corinthians'],
    category: 'Futebol',
    photos: Array.from({ length: 20 }, (_, i) => ({
      id: uuidv4(),
      albumId: '',
      photographerId: mockPhotographers[0].id,
      title: `Foto ${i+1} - Santos vs Corinthians`,
      url: `https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`,
      thumbnailUrl: `https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=600`,
      price: 25.00,
      width: 1200,
      height: 800,
      createdAt: new Date('2024-03-15'),
    })),
    createdAt: new Date('2024-03-15'),
  },
  {
    id: uuidv4(),
    title: 'Copa do Brasil 2023 - Flamengo vs São Paulo',
    description: 'Melhores momentos da final da Copa do Brasil entre Flamengo e São Paulo.',
    coverUrl: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    photographerId: mockPhotographers[1].id,
    photographerName: mockPhotographers[1].name,
    price: 30.00,
    date: new Date('2023-11-20'),
    location: 'Estádio do Maracanã, Rio de Janeiro',
    tags: ['futebol', 'copa do brasil', 'flamengo', 'são paulo', 'final'],
    category: 'Futebol',
    photos: Array.from({ length: 25 }, (_, i) => ({
      id: uuidv4(),
      albumId: '',
      photographerId: mockPhotographers[1].id,
      title: `Foto ${i+1} - Flamengo vs São Paulo`,
      url: `https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`,
      thumbnailUrl: `https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=600`,
      price: 30.00,
      width: 1200,
      height: 800,
      createdAt: new Date('2023-11-20'),
    })),
    createdAt: new Date('2023-11-20'),
  },
  {
    id: uuidv4(),
    title: 'Brasileirão 2024 - Palmeiras vs Internacional',
    description: 'Partida completa entre Palmeiras e Internacional pelo Campeonato Brasileiro 2024.',
    coverUrl: 'https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    photographerId: mockPhotographers[2].id,
    photographerName: mockPhotographers[2].name,
    price: 20.00,
    date: new Date('2024-04-05'),
    location: 'Allianz Parque, São Paulo',
    tags: ['futebol', 'brasileirão', 'palmeiras', 'internacional'],
    category: 'Futebol',
    photos: Array.from({ length: 18 }, (_, i) => ({
      id: uuidv4(),
      albumId: '',
      photographerId: mockPhotographers[2].id,
      title: `Foto ${i+1} - Palmeiras vs Internacional`,
      url: `https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`,
      thumbnailUrl: `https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg?auto=compress&cs=tinysrgb&w=600`,
      price: 20.00,
      width: 1200,
      height: 800,
      createdAt: new Date('2024-04-05'),
    })),
    createdAt: new Date('2024-04-05'),
  },
];

// Set album IDs to photos
mockAlbums.forEach(album => {
  album.photos.forEach(photo => {
    photo.albumId = album.id;
  });
});

// Set albums to photographers
mockPhotographers.forEach((photographer, index) => {
  if (index < mockAlbums.length) {
    photographer.albums.push(mockAlbums[index]);
  }
});