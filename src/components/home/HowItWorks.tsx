import { Camera, CreditCard, Download, UserPlus } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Camera className="w-12 h-12 text-accent" />,
      title: 'Fotógrafos Profissionais',
      description: 'Nossos fotógrafos capturam momentos emocionantes de eventos esportivos com qualidade profissional.'
    },
    {
      icon: <UserPlus className="w-12 h-12 text-accent" />,
      title: 'Cadastro Simples',
      description: 'Crie sua conta gratuitamente para comprar fotos ou se tornar um fotógrafo da plataforma.'
    },
    {
      icon: <CreditCard className="w-12 h-12 text-accent" />,
      title: 'Compra Segura',
      description: 'Escolha suas fotos favoritas, adicione ao carrinho e finalize a compra com segurança pelo Mercado Pago.'
    },
    {
      icon: <Download className="w-12 h-12 text-accent" />,
      title: 'Download Imediato',
      description: 'Após a confirmação do pagamento, baixe suas fotos em alta resolução diretamente no seu perfil.'
    }
  ];

  return (
    <section className="py-16 bg-primary/5">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Como Funciona</h2>
          <p className="text-text-light max-w-2xl mx-auto">
            Descubra como é fácil usar nossa plataforma para encontrar e adquirir 
            as melhores fotos esportivas de qualidade profissional.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-text-light">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;