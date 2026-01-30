/**
 * app.js - ponto de entrada (entry point) da aplicação
 * 
 * Responsabilidades:
 * - Aguardar carregamento completo do DOM
 * - Inicializar a interface (UI.init())
 * - Registrar eventos do formulário
 *
 * Observações:
 * - Assume que todos os módulos globais já foram carregados:
 *   routes-data.js, config.js, calculator.js, ui.js
 */

// Aguarda o carregamento completo do DOM antes de executar qualquer lógica
document.addEventListener('DOMContentLoaded', function () {
  initializeApp();
});

/**
 * Inicializa a aplicação:
 * 1. Chama UI.init() para preparar a interface
 * 2. Registra eventos do formulário
 */
function initializeApp() {
  // Inicializa a interface (popula datalist, etc)
  if (typeof UI !== 'undefined' && typeof UI.init === 'function') {
    UI.init();
  } else {
    console.error('app.js: UI não disponível. Certifique-se de carregar ui.js antes de app.js.');
    return;
  }

  // Registra o listener do formulário
  registerFormEvents();
}

/**
 * Registra os eventos do formulário
 * - Escuta o evento 'submit' do formulário
 * - Previne o comportamento padrão
 * - Chama UI.handleCalculate()
 */
function registerFormEvents() {
  const emissionForm = document.getElementById('emissionForm');

  if (!emissionForm) {
    console.warn('app.js: formulário com id "emissionForm" não encontrado.');
    return;
  }

  emissionForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Previne envio padrão do formulário
    
    // Chama o método de cálculo
    if (typeof UI !== 'undefined' && typeof UI.handleCalculate === 'function') {
      UI.handleCalculate();
    } else {
      console.error('app.js: UI.handleCalculate não disponível.');
    }
  });
}
