import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle2, Camera } from 'lucide-react';
import { useAuthStore } from '../../lib/store';

const PhotographerCTA = () => {
  const { isAuthenticated } = useAuthStore();
  const navigate = useNavigate();

  const handleBePhotographer = () => {
    if (!isAuthenticated) {
      navigate('/entrar?redirect=seja-fotografo');
      return;
    }
    navigate('/seja-fotografo');
  };

  const benefits = [
    'Alcance nacional para suas fotografias esportivas',
    'Gerencie seus próprios preços e álbuns',
    'Ferramentas profissionais para upload em massa',
    'Relatórios detalhados de vendas e desempenho',
    'Marca d\'água automática em todas as fotos',
    'Suporte técnico especializado para fotógrafos'
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side content */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Torne-se um Fotógrafo na Nossa Plataforma</h2>
            <p className="text-text-light mb-6">
              Potencialize suas fotos esportivas alcançando um público maior e gerando 
              renda adicional com suas imagens. Nossa plataforma oferece todas as ferramentas 
              que você precisa para começar a vender suas fotografias.
            </p>
            
            <ul className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            
            <button 
              onClick={handleBePhotographer}
              className="btn-primary"
            >
              Cadastrar como Fotógrafo
            </button>
          </div>
          
          {/* Right side pricing */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card p-6 border border-accent shadow-lg relative">
              <div className="absolute -top-3 right-6 bg-accent text-primary text-xs font-bold px-3 py-1 rounded-full">
                Popular
              </div>
              <h3 className="text-xl font-bold mb-1">Plano Vitalício</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold">R$ 1.500,00</span>
                <div className="text-sm text-text-light mt-1">+ R$ 29,90/mês</div>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start text-sm">
                  <CheckCircle2 className="w-4 h-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                  <span>Acesso vitalício à plataforma</span>
                </li>
                <li className="flex items-start text-sm">
                  <CheckCircle2 className="w-4 h-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                  <span>Upload ilimitado de fotos</span>
                </li>
                <li className="flex items-start text-sm">
                  <CheckCircle2 className="w-4 h-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                  <span>Sem comissão nas vendas</span>
                </li>
                <li className="flex items-start text-sm">
                  <CheckCircle2 className="w-4 h-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                  <span>Relatórios detalhados</span>
                </li>
                <li className="flex items-start text-sm">
                  <CheckCircle2 className="w-4 h-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                  <span>Suporte prioritário</span>
                </li>
              </ul>
              <button 
                onClick={handleBePhotographer}
                className="btn-accent w-full"
              >
                <Camera className="w-4 h-4 mr-2" />
                Escolher Plano
              </button>
            </div>

            <div className="card p-6 border border-gray-200">
              <h3 className="text-xl font-bold mb-1">Plano Gratuito</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold">R$ 0,00</span>
                <div className="text-sm text-text-light mt-1">Sem mensalidade</div>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start text-sm">
                  <CheckCircle2 className="w-4 h-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                  <span>Comissão de 30% por foto</span>
                </li>
                <li className="flex items-start text-sm">
                  <CheckCircle2 className="w-4 h-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                  <span>Upload ilimitado de fotos</span>
                </li>
                <li className="flex items-start text-sm">
                  <CheckCircle2 className="w-4 h-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                  <span>Relatórios básicos</span>
                </li>
                <li className="flex items-start text-sm">
                  <CheckCircle2 className="w-4 h-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                  <span>Suporte por email</span>
                </li>
              </ul>
              <button 
                onClick={handleBePhotographer}
                className="btn-outline w-full"
              >
                <Camera className="w-4 h-4 mr-2" />
                Escolher Plano
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotographerCTA;