import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Camera } from 'lucide-react';
import { useAuthStore } from '../lib/store';

const BePhotographerPage = () => {
  const [selectedPlan, setSelectedPlan] = useState<'lifetime' | 'free' | null>(null);
  const { isAuthenticated } = useAuthStore();

  const benefits = [
    'Alcance nacional para suas fotografias esportivas',
    'Gerencie seus próprios preços e álbuns',
    'Ferramentas profissionais para upload em massa',
    'Relatórios detalhados de vendas e desempenho',
    'Marca d\'água automática em todas as fotos',
    'Suporte técnico especializado para fotógrafos'
  ];
  
  const plans = [
    {
      id: 'lifetime',
      name: 'Plano Vitalício',
      price: 'R$ 1.500,00',
      subscription: 'R$ 29,90/mês',
      features: [
        'Acesso vitalício à plataforma',
        'Upload ilimitado de fotos',
        'Sem comissão nas vendas',
        'Relatórios detalhados de vendas',
        'URL personalizada',
        'Suporte prioritário'
      ],
      popular: true
    },
    {
      id: 'free',
      name: 'Plano Gratuito',
      price: 'R$ 0,00',
      subscription: 'Sem mensalidade',
      features: [
        'Comissão de 30% por foto vendida',
        'Upload ilimitado de fotos',
        'Relatórios básicos de vendas',
        'URL personalizada',
        'Suporte por e-mail'
      ],
      popular: false
    }
  ];

  const handlePlanSelection = async (planId: 'lifetime' | 'free') => {
    setSelectedPlan(planId);
    
    if (!isAuthenticated) {
      window.location.href = '/entrar?redirect=seja-fotografo';
      return;
    }

    if (planId === 'lifetime') {
      // Redirecionar para o checkout do Stripe
      try {
        const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/create-checkout`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
          },
          body: JSON.stringify({
            planId: 'lifetime',
            promoCode: null
          })
        });

        const { sessionId } = await response.json();
        window.location.href = sessionId;
      } catch (error) {
        console.error('Erro ao criar sessão de checkout:', error);
      }
    } else {
      // Processar plano gratuito
      window.location.href = '/fotografo/painel';
    }
  };

  return (
    <>
      {/* Hero Section */}
      <div className="bg-primary py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
            Torne-se um Fotógrafo na FOTOGRAFUT
          </h1>
          <p className="text-white/80 text-center max-w-3xl mx-auto text-lg">
            Potencialize suas fotos esportivas alcançando um público maior e gerando 
            renda adicional com suas imagens.
          </p>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Por que escolher a FOTOGRAFUT?</h2>
              <p className="text-text-light mb-6">
                Nossa plataforma oferece todas as ferramentas que você precisa para 
                começar a vender suas fotografias esportivas de forma profissional.
              </p>
              
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/2402648/pexels-photo-2402648.jpeg"
                alt="Fotógrafo esportivo"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent text-primary p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">100+</div>
                <div className="text-sm">Fotógrafos Ativos</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Escolha seu Plano</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {plans.map((plan) => (
              <div 
                key={plan.id}
                className={`card p-6 border ${
                  plan.popular ? 'border-accent shadow-lg relative' : 'border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 right-6 bg-accent text-primary text-xs font-bold px-3 py-1 rounded-full">
                    Popular
                  </div>
                )}
                
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  {plan.subscription && (
                    <div className="text-sm text-text-light mt-1">+ {plan.subscription}</div>
                  )}
                </div>
                
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <CheckCircle2 className="w-4 h-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  onClick={() => handlePlanSelection(plan.id as 'lifetime' | 'free')}
                  className={`btn w-full ${plan.popular ? 'btn-accent' : 'btn-outline'}`}
                >
                  <Camera className="w-4 h-4 mr-2" />
                  Escolher Plano
                </button>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-text-light mb-4">
              Experimente grátis por 1 mês usando o código:
            </p>
            <div className="inline-block bg-primary/5 px-4 py-2 rounded-md">
              <code className="text-accent font-bold">testeummesgratis</code>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Perguntas Frequentes</h2>
          
          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="font-bold mb-2">Como funciona o pagamento das vendas?</h3>
              <p className="text-text-light">
                Os pagamentos são processados automaticamente e transferidos para sua conta 
                bancária em até 7 dias úteis após a confirmação da venda.
              </p>
            </div>
            
            <div className="card p-6">
              <h3 className="font-bold mb-2">Posso cancelar minha assinatura?</h3>
              <p className="text-text-light">
                Sim, você pode cancelar sua assinatura a qualquer momento. No plano vitalício, 
                você mantém acesso à plataforma mesmo após o cancelamento.
              </p>
            </div>
            
            <div className="card p-6">
              <h3 className="font-bold mb-2">Qual o formato das fotos?</h3>
              <p className="text-text-light">
                Aceitamos uploads de fotos em JPG e PNG, com resolução mínima de 3000x2000 pixels.
              </p>
            </div>
            
            <div className="card p-6">
              <h3 className="font-bold mb-2">Como funciona a proteção das fotos?</h3>
              <p className="text-text-light">
                Todas as fotos são exibidas com marca d'água e em baixa resolução. O cliente só 
                recebe a versão em alta resolução após a confirmação do pagamento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">
            Comece sua Jornada como Fotógrafo Profissional
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Junte-se a uma comunidade de fotógrafos apaixonados por esportes e comece 
            a monetizar seu trabalho hoje mesmo.
          </p>
          <button 
            onClick={() => handlePlanSelection('lifetime')}
            className="btn bg-white text-primary hover:bg-white/90 text-lg px-8 py-3"
          >
            Começar Agora
          </button>
        </div>
      </section>
    </>
  );
};

export default BePhotographerPage;