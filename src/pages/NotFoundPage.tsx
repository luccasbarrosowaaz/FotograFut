import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center p-8 max-w-md">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-bold mb-4">Página não encontrada</h2>
        <p className="text-text-light mb-8">
          A página que você está procurando não existe ou foi removida.
        </p>
        <Link to="/" className="btn-primary">
          <Home className="mr-2 h-5 w-5" />
          Voltar para a Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;