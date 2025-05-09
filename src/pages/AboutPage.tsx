import React from 'react';
import { Camera, Users, Award, Shield } from 'lucide-react';

const AboutPage = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-primary py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
            Sobre O Jogo Photo Press
          </h1>
          <p className="text-white/80 text-center max-w-3xl mx-auto text-lg">
            Conectando fotógrafos talentosos a momentos esportivos inesquecíveis desde 2024.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Nossa Missão</h2>
              <p className="text-text-light mb-6">
                Democratizar o acesso à fotografia esportiva profissional, conectando fotógrafos talentosos 
                a atletas, times e torcedores que desejam eternizar momentos especiais do esporte.
              </p>
              <p className="text-text-light">
                Acreditamos que cada momento no esporte merece ser capturado com qualidade profissional 
                e estar acessível a todos os envolvidos.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary/5 p-6 rounded-lg">
                <Camera className="h-8 w-8 text-accent mb-4" />
                <h3 className="font-bold mb-2">Qualidade</h3>
                <p className="text-text-light text-sm">
                  Fotos profissionais de alta resolução
                </p>
              </div>
              <div className="bg-primary/5 p-6 rounded-lg">
                <Users className="h-8 w-8 text-accent mb-4" />
                <h3 className="font-bold mb-2">Comunidade</h3>
                <p className="text-text-light text-sm">
                  Rede de fotógrafos qualificados
                </p>
              </div>
              <div className="bg-primary/5 p-6 rounded-lg">
                <Award className="h-8 w-8 text-accent mb-4" />
                <h3 className="font-bold mb-2">Excelência</h3>
                <p className="text-text-light text-sm">
                  Curadoria de conteúdo
                </p>
              </div>
              <div className="bg-primary/5 p-6 rounded-lg">
                <Shield className="h-8 w-8 text-accent mb-4" />
                <h3 className="font-bold mb-2">Segurança</h3>
                <p className="text-text-light text-sm">
                  Pagamentos e entregas garantidos
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Nossa Equipe</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                <img 
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150" 
                  alt="João Silva"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-xl mb-2">João Silva</h3>
              <p className="text-accent font-medium mb-2">CEO & Fundador</p>
              <p className="text-text-light">
                Ex-fotógrafo esportivo com mais de 15 anos de experiência.
              </p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                <img 
                  src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150" 
                  alt="Ana Santos"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-xl mb-2">Ana Santos</h3>
              <p className="text-accent font-medium mb-2">Diretora de Operações</p>
              <p className="text-text-light">
                Especialista em gestão de marketplaces digitais.
              </p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                <img 
                  src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150" 
                  alt="Pedro Costa"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-xl mb-2">Pedro Costa</h3>
              <p className="text-accent font-medium mb-2">Diretor de Tecnologia</p>
              <p className="text-text-light">
                Desenvolvedor full-stack com foco em plataformas escaláveis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold mb-2">100+</p>
              <p className="text-white/80">Fotógrafos Ativos</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">1000+</p>
              <p className="text-white/80">Álbuns Publicados</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">50k+</p>
              <p className="text-white/80">Fotos Vendidas</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">10k+</p>
              <p className="text-white/80">Clientes Satisfeitos</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;