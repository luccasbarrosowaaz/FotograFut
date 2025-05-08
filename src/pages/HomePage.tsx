import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import FeaturedAlbums from '../components/home/FeaturedAlbums';
import HowItWorks from '../components/home/HowItWorks';
import PhotographerSpotlight from '../components/home/PhotographerSpotlight';
import PhotographerCTA from '../components/home/PhotographerCTA';
import Testimonials from '../components/home/Testimonials';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'O Jogo Photo Press - Fotografia Esportiva Profissional';
  }, []);

  return (
    <>
      <Hero />
      <FeaturedAlbums />
      <HowItWorks />
      <PhotographerSpotlight />
      <Testimonials />
      <PhotographerCTA />
    </>
  );
};

export default HomePage;