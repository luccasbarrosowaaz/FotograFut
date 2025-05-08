import React from 'react';

function PhotographerDashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Painel do Fotógrafo</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Statistics Cards */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Álbuns Ativos</h2>
          <p className="text-4xl font-bold text-blue-600">0</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Vendas do Mês</h2>
          <p className="text-4xl font-bold text-green-600">R$ 0,00</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Total de Clientes</h2>
          <p className="text-4xl font-bold text-purple-600">0</p>
        </div>

        {/* Recent Albums Section */}
        <div className="md:col-span-2 lg:col-span-3 bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Álbuns Recentes</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b">
                  <th className="pb-4">Álbum</th>
                  <th className="pb-4">Data</th>
                  <th className="pb-4">Status</th>
                  <th className="pb-4">Vendas</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-gray-500">
                  <td className="py-4">Nenhum álbum encontrado</td>
                  <td className="py-4">-</td>
                  <td className="py-4">-</td>
                  <td className="py-4">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="md:col-span-2 lg:col-span-3 bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Ações Rápidas</h2>
          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Novo Álbum
            </button>
            <button className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors">
              Ver Relatórios
            </button>
            <button className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors">
              Configurações
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotographerDashboardPage;