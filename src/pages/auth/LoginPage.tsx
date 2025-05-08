import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../lib/store';
import { Camera } from 'lucide-react';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const navigate = useNavigate();
  const { login } = useAuthStore();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    // Simulate authentication
    try {
      // In a real app, this would be an API call
      setTimeout(() => {
        if (email === 'fotografo@example.com' && password === 'password') {
          login({
            id: '1',
            name: 'Carlos Silva',
            email: 'fotografo@example.com',
            role: 'photographer',
            createdAt: new Date()
          });
          navigate('/fotografo/painel');
        } else if (email === 'cliente@example.com' && password === 'password') {
          login({
            id: '2',
            name: 'Ana Souza',
            email: 'cliente@example.com',
            role: 'customer',
            createdAt: new Date()
          });
          navigate('/cliente/painel');
        } else if (email === 'admin@example.com' && password === 'password') {
          login({
            id: '3',
            name: 'Admin',
            email: 'admin@example.com',
            role: 'admin',
            createdAt: new Date()
          });
          navigate('/admin/painel');
        } else {
          setError('Credenciais inválidas. Tente novamente.');
        }
        setLoading(false);
      }, 1000);
    } catch (error) {
      setError('Ocorreu um erro ao fazer login. Tente novamente.');
      setLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center py-12 bg-background">
      <div className="max-w-md w-full space-y-8 p-6 bg-white rounded-lg shadow-lg">
        <div className="text-center">
          <div className="flex justify-center">
            <Camera className="h-12 w-12 text-accent" />
          </div>
          <h2 className="mt-4 text-3xl font-bold">Entre na sua conta</h2>
          <p className="mt-2 text-text-light">
            Acesse sua conta para gerenciar seus pedidos, álbuns e fotos.
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-error/10 text-error p-3 rounded-md text-sm">
              {error}
            </div>
          )}
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-text">
              E-mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="input mt-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          
          <div>
            <div className="flex justify-between items-center">
              <label htmlFor="password" className="block text-sm font-medium text-text">
                Senha
              </label>
              <Link to="/recuperar-senha" className="text-sm font-medium text-accent hover:text-accent-light">
                Esqueceu a senha?
              </Link>
            </div>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="input mt-1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <div>
            <button
              type="submit"
              className="btn-primary w-full py-3"
              disabled={loading}
            >
              {loading ? 'Entrando...' : 'Entrar'}
            </button>
          </div>
        </form>
        
        <div className="text-center mt-4">
          <p className="text-sm text-text-light">
            Não tem uma conta?{' '}
            <Link to="/cadastro" className="font-medium text-accent hover:text-accent-light">
              Cadastre-se
            </Link>
          </p>
        </div>
        
        <div className="mt-6 border-t border-gray-200 pt-4">
          <p className="text-xs text-center text-text-light">
            Dica: Use os seguintes logins para teste:
          </p>
          <div className="mt-2 grid grid-cols-3 gap-2 text-xs text-center">
            <div>
              <p className="font-bold">Fotógrafo</p>
              <p>fotografo@example.com</p>
              <p>password</p>
            </div>
            <div>
              <p className="font-bold">Cliente</p>
              <p>cliente@example.com</p>
              <p>password</p>
            </div>
            <div>
              <p className="font-bold">Admin</p>
              <p>admin@example.com</p>
              <p>password</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;