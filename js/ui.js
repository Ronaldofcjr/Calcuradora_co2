/**
 * UI - integração da interface HTML com a lógica de negócio
 * - Ler dados do formulário
 * - Validações básicas
 * - Atualizar interface com resultados
 *
 * Observações:
 * - Assume que os arquivos anteriores (routes-data.js, config.js, calculator.js) foram carregados
 * - Pode manipular DOM
 */

const UI = {
  /**
   * Inicialização da interface
   * - Popula o <datalist> de cidades
   * - Poderia adicionar listeners de eventos (delegado a app.js)
   */
  init() {
    // Verifica disponibilidade de Config
    if (typeof Config !== 'undefined' && typeof Config.populateDatalist === 'function') {
      Config.populateDatalist();
    } else if (typeof console !== 'undefined' && console.warn) {
      console.warn('UI.init(): Config ou Config.populateDatalist não disponível.');
    }
  },

  /**
   * Identifica qual meio de transporte está selecionado (radio button).
   * Retorna o valor do input selecionado ou null se nenhum estiver selecionado.
   *
   * @returns {string|null} 'bicycle' | 'car' | 'bus' | null
   */
  getSelectedTransport() {
    // Seleciona o radio button selecionado pelo name='transport'
    const selectedInput = typeof document !== 'undefined' 
      ? document.querySelector('input[name="transport"]:checked') 
      : null;

    if (selectedInput && selectedInput.value) {
      return selectedInput.value;
    }
    return null;
  },

  /**
   * Lê os dados do formulário, valida, calcula a emissão e exibe o resultado.
   *
   * Passos:
   * 1. Ler valores dos inputs (origin, destination, distance)
   * 2. Validar campos obrigatórios
   * 3. Se distance não foi fornecida, tentar obter via RoutesDB.findDistance()
   * 4. Validar se distância é número positivo
   * 5. Obter meio de transporte selecionado
   * 6. Chamar Calculator.calculateEmission()
   * 7. Exibir resultado ou erro
   */
  handleCalculate() {
    // Inicializa variáveis de erro e resultado
    let errorMessage = null;
    let emission = null;

    // ===== LEITURA DOS DADOS =====
    const originInput = typeof document !== 'undefined' ? document.getElementById('origin') : null;
    const destinationInput = typeof document !== 'undefined' ? document.getElementById('destination') : null;
    const distanceInput = typeof document !== 'undefined' ? document.getElementById('distance') : null;

    const origin = originInput ? originInput.value.trim() : '';
    const destination = destinationInput ? destinationInput.value.trim() : '';
    let distance = distanceInput ? parseFloat(distanceInput.value) : NaN;

    // ===== VALIDAÇÃO BÁSICA =====
    if (!origin) {
      errorMessage = 'Por favor, informe a cidade de origem.';
    } else if (!destination) {
      errorMessage = 'Por favor, informe a cidade de destino.';
    }

    // Se não houver erro, continua
    if (!errorMessage) {
      const transport = this.getSelectedTransport();
      if (!transport) {
        errorMessage = 'Por favor, selecione um meio de transporte.';
      }
    }

    // ===== TENTAR OBTER DISTÂNCIA AUTOMATICAMENTE =====
    if (!errorMessage && (isNaN(distance) || distance === '' || distance === null)) {
      // Tenta obter a distância via RoutesDB
      if (typeof RoutesDB !== 'undefined' && typeof RoutesDB.findDistance === 'function') {
        distance = RoutesDB.findDistance(origin, destination);

        if (distance === null) {
          errorMessage = `Rota "${origin}" → "${destination}" não encontrada. Por favor, informe a distância manualmente.`;
        }
      } else {
        errorMessage = 'Por favor, informe a distância em km.';
      }
    } else if (!errorMessage && (isNaN(distance) || distance < 0)) {
      // Valida a distância se foi informada
      errorMessage = 'A distância deve ser um número positivo.';
    }

    // ===== CALCULAR EMISSÃO =====
    if (!errorMessage) {
      const transport = this.getSelectedTransport();
      if (typeof Calculator !== 'undefined' && typeof Calculator.calculateEmission === 'function') {
        emission = Calculator.calculateEmission(distance, transport);

        if (emission === null) {
          errorMessage = 'Erro ao calcular a emissão. Verifique os dados informados.';
        }
      } else {
        errorMessage = 'Calculadora não disponível.';
      }
    }

    // ===== EXIBIR RESULTADO OU ERRO =====
    this.displayResult(emission, errorMessage, origin, destination, distance);
  },

  /**
   * Exibe o resultado ou mensagem de erro na interface.
   * Mostra/esconde o container de resultado conforme necessário.
   *
   * @param {number|null} emission - emissão em kg de CO2
   * @param {string|null} errorMessage - mensagem de erro
   * @param {string} origin - cidade de origem
   * @param {string} destination - cidade de destino
   * @param {number} distance - distância em km
   */
  displayResult(emission, errorMessage, origin, destination, distance) {
    const resultContainer = typeof document !== 'undefined' 
      ? document.getElementById('resultContainer') 
      : null;
    const resultValue = typeof document !== 'undefined' 
      ? document.getElementById('resultValue') 
      : null;

    if (!resultContainer || !resultValue) {
      if (typeof console !== 'undefined' && console.warn) {
        console.warn('UI.displayResult(): elementos de resultado não encontrados no HTML.');
      }
      return;
    }

    if (errorMessage) {
      // Exibir erro
      resultValue.textContent = errorMessage;
      resultValue.style.color = 'var(--color-error)';
      resultContainer.style.display = 'block';
    } else if (emission !== null && typeof emission === 'number') {
      // Exibir resultado com sucesso
      const distanceText = distance ? `${distance} km` : '(automática)';
      const transportLabel = this.getTransportLabel(this.getSelectedTransport());
      
      resultValue.innerHTML = `
        <strong>${emission.toFixed(2)} kg</strong> de CO₂<br>
        <small style="color: var(--color-text-light); font-weight: normal;">
          ${origin} → ${destination} (${distanceText}) via ${transportLabel}
        </small>
      `;
      resultValue.style.color = 'var(--color-primary)';
      resultContainer.style.display = 'block';
    } else {
      // Caso inesperado
      resultValue.textContent = 'Não foi possível calcular a emissão.';
      resultValue.style.color = 'var(--color-error)';
      resultContainer.style.display = 'block';
    }
  },

  /**
   * Converte o valor do transporte (valor de radio) para seu rótulo amigável.
   * Auxiliar para exibição do resultado.
   *
   * @param {string} transportValue - 'bicycle' | 'car' | 'bus'
   * @returns {string}
   */
  getTransportLabel(transportValue) {
    const labels = {
      bicycle: 'Bicicleta',
      car: 'Carro',
      bus: 'Ônibus'
    };
    return labels[transportValue] || transportValue;
  }
};

// Tornar acessível globalmente
if (typeof globalThis !== 'undefined') globalThis.UI = UI;

// Export para CommonJS (opcional)
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = UI;
}
