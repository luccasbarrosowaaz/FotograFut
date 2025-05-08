import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';

const PhotographerCTA = () => {
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
            
            <Link to="/cadastro/fotografo" className="btn-primary">
              Cadastrar como Fotógrafo
            </Link>
          </div>
          
          {/* Right side pricing */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {plans.map((plan, index) => (
              <div 
                key={index} 
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
                
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <CheckCircle2 className="w-4 h-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to="/cadastro/fotografo" 
                  className={`btn w-full ${plan.popular ? 'btn-accent' : 'btn-outline'}`}
                >
                  Escolher Plano
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotographerCTA;