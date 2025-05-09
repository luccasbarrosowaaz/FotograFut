import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implementar envio do formulário
    console.log(formData);
    alert('Mensagem enviada com sucesso!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <>
      {/* Hero Section */}
      <div className="bg-primary py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
            Entre em Contato
          </h1>
          <p className="text-white/80 text-center max-w-3xl mx-auto text-lg">
            Estamos aqui para ajudar. Entre em contato conosco para tirar suas dúvidas.
          </p>
        </div>
      </div>

      {/* Contact Info & Form Section */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold mb-6">Informações de Contato</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-accent mt-1" />
                  <div className="ml-4">
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-text-light">contato@ojogophoto.com.br</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-accent mt-1" />
                  <div className="ml-4">
                    <h3 className="font-bold mb-1">Telefone</h3>
                    <p className="text-text-light">(11) 4002-8922</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-accent mt-1" />
                  <div className="ml-4">
                    <h3 className="font-bold mb-1">Endereço</h3>
                    <p className="text-text-light">
                      Av. Paulista, 1000<br />
                      Bela Vista, São Paulo - SP<br />
                      CEP: 01310-100
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-bold mb-4">Horário de Atendimento</h3>
                <p className="text-text-light mb-2">Segunda a Sexta: 9h às 18h</p>
                <p className="text-text-light">Sábado: 9h às 13h</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6">Envie sua Mensagem</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-text mb-1">
                        Nome Completo
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="input"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-text mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="input"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-text mb-1">
                      Assunto
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="input"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text mb-1">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      className="input"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn-primary flex items-center">
                    <Send className="w-4 h-4 mr-2" />
                    Enviar Mensagem
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Perguntas Frequentes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-primary/5 p-6 rounded-lg">
              <h3 className="font-bold mb-2">Como compro as fotos?</h3>
              <p className="text-text-light">
                Basta escolher as fotos desejadas, adicionar ao carrinho e finalizar a compra 
                com seu método de pagamento preferido.
              </p>
            </div>
            
            <div className="bg-primary/5 p-6 rounded-lg">
              <h3 className="font-bold mb-2">Qual o formato das fotos?</h3>
              <p className="text-text-light">
                Todas as fotos são entregues em alta resolução nos formatos JPG e PNG, 
                sem marca d'água.
              </p>
            </div>
            
            <div className="bg-primary/5 p-6 rounded-lg">
              <h3 className="font-bold mb-2">Quanto tempo para receber?</h3>
              <p className="text-text-light">
                Após a confirmação do pagamento, você receberá o link para download 
                imediatamente.
              </p>
            </div>
            
            <div className="bg-primary/5 p-6 rounded-lg">
              <h3 className="font-bold mb-2">Como me torno fotógrafo?</h3>
              <p className="text-text-light">
                Acesse a seção "Seja um Fotógrafo", escolha seu plano e comece a 
                vender suas fotos.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;