/**
 * Config - centraliza configurações da Calculadora de CO2
 * - emissionFactors: fatores de emissão em kg por km
 * - populateDatalist(): popula <datalist id="cities-list"> com cidades do RoutesDB
 *
 * Observações:
 * - Assume que `routes-data.js` já foi carregado antes deste arquivo
 * - Método `populateDatalist` apenas popula o datalist; não faz cálculos
 */

const Config = {
  // Fatores de emissão (kg CO2 por km)
  emissionFactors: {
    bicycle: 0,
    car: 0.12,
    bus: 0.089
  },

  /**
   * Popula o elemento <datalist id="cities-list"> com todas as cidades
   * retornadas por `RoutesDB.getAllCities()`.
   * - Não altera inputs diretamente (apenas adiciona <option> ao datalist)
   * - Silenciosamente aborta se o datalist não existir ou se RoutesDB não estiver disponível
   */
  populateDatalist() {
    // Verifica disponibilidade do RoutesDB
    if (typeof RoutesDB === 'undefined' || typeof RoutesDB.getAllCities !== 'function') {
      // Não lançar erro para não interromper a inicialização da UI
      // Apenas log para ajudar em debug durante desenvolvimento
      if (typeof console !== 'undefined' && console.warn) {
        console.warn('Config.populateDatalist(): RoutesDB não disponível. Certifique-se de carregar routes-data.js antes de config.js.');
      }
      return;
    }

    const cities = RoutesDB.getAllCities();
    // Seleciona o datalist pelo id solicitado
    const datalist = typeof document !== 'undefined' ? document.getElementById('cities-list') : null;

    if (!datalist || datalist.tagName.toLowerCase() !== 'datalist') {
      if (typeof console !== 'undefined' && console.warn) {
        console.warn('Config.populateDatalist(): elemento <datalist id="cities-list"> não encontrado.');
      }
      return;
    }

    // Limpa opções existentes de maneira segura
    while (datalist.firstChild) datalist.removeChild(datalist.firstChild);

    // Cria <option> para cada cidade
    cities.forEach((city) => {
      if (!city) return;
      const option = document.createElement('option');
      option.value = city;
      datalist.appendChild(option);
    });
  }
};

// Tornar disponível globalmente para acesso direto no navegador
if (typeof globalThis !== 'undefined') globalThis.Config = Config;

// Export para ambientes CommonJS (opcional)
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = Config;
}
