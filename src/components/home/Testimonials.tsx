import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Rodrigo Almeida',
      role: 'Fotógrafo Profissional',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=120',
      quote: 'A plataforma revolucionou minha carreira como fotógrafo esportivo. Consegui aumentar minha visibilidade e mais importante, minhas vendas cresceram mais de 200% nos últimos meses.',
      rating: 5
    },
    {
      id: 2,
      name: 'Fernanda Santos',
      role: 'Cliente',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=120',
      quote: 'Encontrei fotos incríveis do meu filho jogando futebol. A qualidade das imagens é excepcional e o processo de compra foi super simples. Recomendo a todos!',
      rating: 5
    },
    {
      id: 3,
      name: 'Carlos Mendes',
      role: 'Fotógrafo Esportivo',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=120',
      quote: 'Como fotógrafo freelancer, esta plataforma me ajudou a expandir meu negócio e encontrar um nicho lucrativo. As ferramentas administrativas são excelentes.',
      rating: 4
    }
  ];

  return (
    <section className="py-16 bg-primary">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">O Que Dizem Sobre Nós</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Veja os depoimentos de fotógrafos e clientes que utilizam nossa plataforma.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-sm text-text-light">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${
                      i < testimonial.rating ? 'fill-accent text-accent' : 'text-gray-300'
                    }`} 
                  />
                ))}
              </div>
              
              <p className="text-text-light italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;