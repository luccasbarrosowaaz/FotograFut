import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPage = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-primary py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
            Política de Privacidade
          </h1>
          <p className="text-white/80 text-center max-w-3xl mx-auto text-lg">
            Última atualização: 09 de Maio de 2024
          </p>
        </div>
      </div>

      {/* Privacy Content */}
      <section className="py-16 bg-background">
        <div className="container-custom max-w-4xl">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold mb-6">1. Informações que Coletamos</h2>
              <p className="text-text-light mb-6">
                Coletamos informações que você nos fornece diretamente ao usar nossos serviços:
              </p>
              <ul className="list-disc pl-6 mb-6 text-text-light">
                <li>Nome completo</li>
                <li>Endereço de e-mail</li>
                <li>Informações de pagamento</li>
                <li>Fotos e conteúdo que você faz upload</li>
                <li>Informações do perfil</li>
              </ul>

              <h2 className="text-2xl font-bold mb-6">2. Como Usamos suas Informações</h2>
              <p className="text-text-light mb-6">
                Utilizamos as informações coletadas para:
              </p>
              <ul className="list-disc pl-6 mb-6 text-text-light">
                <li>Fornecer, manter e melhorar nossos serviços</li>
                <li>Processar suas transações</li>
                <li>Enviar informações sobre sua conta</li>
                <li>Responder suas perguntas e solicitações</li>
                <li>Prevenir atividades fraudulentas</li>
              </ul>

              <h2 className="text-2xl font-bold mb-6">3. Compartilhamento de Informações</h2>
              <p className="text-text-light mb-6">
                Não vendemos suas informações pessoais. Compartilhamos suas informações apenas:
              </p>
              <ul className="list-disc pl-6 mb-6 text-text-light">
                <li>Com provedores de serviço que nos ajudam a operar a plataforma</li>
                <li>Quando exigido por lei</li>
                <li>Para proteger direitos e segurança</li>
              </ul>

              <h2 className="text-2xl font-bold mb-6">4. Segurança</h2>
              <p className="text-text-light mb-6">
                Implementamos medidas de segurança para proteger suas informações:
              </p>
              <ul className="list-disc pl-6 mb-6 text-text-light">
                <li>Criptografia SSL/TLS</li>
                <li>Monitoramento regular de segurança</li>
                <li>Acesso restrito a dados pessoais</li>
                <li>Backups regulares</li>
              </ul>

              <h2 className="text-2xl font-bold mb-6">5. Seus Direitos</h2>
              <p className="text-text-light mb-6">
                Você tem direito a:
              </p>
              <ul className="list-disc pl-6 mb-6 text-text-light">
                <li>Acessar seus dados pessoais</li>
                <li>Corrigir dados incorretos</li>
                <li>Solicitar exclusão de dados</li>
                <li>Retirar consentimento</li>
                <li>Receber seus dados em formato portável</li>
              </ul>

              <h2 className="text-2xl font-bold mb-6">6. Cookies e Tecnologias Similares</h2>
              <p className="text-text-light mb-6">
                Usamos cookies e tecnologias similares para:
              </p>
              <ul className="list-disc pl-6 mb-6 text-text-light">
                <li>Manter você conectado</li>
                <li>Lembrar suas preferências</li>
                <li>Entender como você usa nosso site</li>
                <li>Melhorar nossos serviços</li>
              </ul>

              <h2 className="text-2xl font-bold mb-6">7. Alterações na Política</h2>
              <p className="text-text-light mb-6">
                Podemos atualizar esta política periodicamente. Notificaremos sobre mudanças 
                significativas por e-mail ou através de nosso site.
              </p>

              <div className="mt-8 p-4 bg-primary/5 rounded-lg">
                <p className="text-sm text-text-light">
                  Para quaisquer dúvidas sobre esta política, entre em contato conosco através 
                  da nossa página de{' '}
                  <Link to="/contato" className="text-accent hover:underline">
                    contato
                  </Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPage;