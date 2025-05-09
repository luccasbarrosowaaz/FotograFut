import React from 'react';
import { Link } from 'react-router-dom';

const TermsPage = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-primary py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
            Termos de Uso
          </h1>
          <p className="text-white/80 text-center max-w-3xl mx-auto text-lg">
            Última atualização: 09 de Maio de 2024
          </p>
        </div>
      </div>

      {/* Terms Content */}
      <section className="py-16 bg-background">
        <div className="container-custom max-w-4xl">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold mb-6">1. Termos</h2>
              <p className="text-text-light mb-6">
                Ao acessar o site O Jogo Photo Press, você concorda em cumprir estes termos de 
                serviço, todas as leis e regulamentos aplicáveis e concorda que é responsável 
                pelo cumprimento de todas as leis locais aplicáveis.
              </p>

              <h2 className="text-2xl font-bold mb-6">2. Licença de Uso</h2>
              <p className="text-text-light mb-6">
                É concedida permissão para baixar temporariamente uma cópia dos materiais 
                (informações ou software) no site O Jogo Photo Press, apenas para visualização 
                transitória pessoal e não comercial. Esta é a concessão de uma licença, não 
                uma transferência de título.
              </p>

              <h2 className="text-2xl font-bold mb-6">3. Uso Proibido</h2>
              <p className="text-text-light mb-4">Você não pode:</p>
              <ul className="list-disc pl-6 mb-6 text-text-light">
                <li>Modificar ou copiar os materiais</li>
                <li>Usar os materiais para qualquer finalidade comercial</li>
                <li>Tentar descompilar ou fazer engenharia reversa de qualquer software</li>
                <li>Remover quaisquer direitos autorais ou outras notações de propriedade</li>
                <li>Transferir os materiais para outra pessoa</li>
              </ul>

              <h2 className="text-2xl font-bold mb-6">4. Contas de Usuário</h2>
              <p className="text-text-light mb-6">
                Para utilizar determinados recursos do site, você precisará criar uma conta. 
                Você é responsável por manter a confidencialidade de sua conta e senha e por 
                restringir o acesso ao seu computador.
              </p>

              <h2 className="text-2xl font-bold mb-6">5. Pagamentos e Reembolsos</h2>
              <p className="text-text-light mb-6">
                Todos os pagamentos são processados de forma segura através do Mercado Pago. 
                Reembolsos podem ser solicitados em até 7 dias após a compra, desde que as 
                fotos não tenham sido baixadas.
              </p>

              <h2 className="text-2xl font-bold mb-6">6. Direitos Autorais</h2>
              <p className="text-text-light mb-6">
                Todas as fotos disponíveis na plataforma são protegidas por direitos autorais 
                e pertencem aos seus respectivos fotógrafos. A compra de uma foto concede 
                apenas o direito de uso pessoal.
              </p>

              <h2 className="text-2xl font-bold mb-6">7. Limitação de Responsabilidade</h2>
              <p className="text-text-light mb-6">
                Em nenhum caso o O Jogo Photo Press ou seus fornecedores serão responsáveis 
                por quaisquer danos que resultem do uso ou da incapacidade de usar os 
                materiais em O Jogo Photo Press.
              </p>

              <h2 className="text-2xl font-bold mb-6">8. Precisão dos Materiais</h2>
              <p className="text-text-light mb-6">
                Os materiais exibidos no site O Jogo Photo Press podem incluir erros 
                técnicos, tipográficos ou fotográficos. Não garantimos que qualquer 
                material em seu site seja preciso, completo ou atual.
              </p>

              <h2 className="text-2xl font-bold mb-6">9. Links</h2>
              <p className="text-text-light mb-6">
                O O Jogo Photo Press não analisou todos os sites vinculados ao seu site e 
                não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de 
                qualquer link não implica endosso por O Jogo Photo Press do site.
              </p>

              <h2 className="text-2xl font-bold mb-6">10. Modificações</h2>
              <p className="text-text-light mb-6">
                O O Jogo Photo Press pode revisar estes termos de serviço do site a qualquer 
                momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado 
                à versão atual desses termos de serviço.
              </p>

              <div className="mt-8 p-4 bg-primary/5 rounded-lg">
                <p className="text-sm text-text-light">
                  Para quaisquer dúvidas sobre estes termos, entre em contato conosco através 
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

export default TermsPage;