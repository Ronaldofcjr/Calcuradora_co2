/**
 * Calculator - lógica de cálculo das emissões de CO2
 * - Método: calculateEmission(distanceKm, transportMode)
 *
 * Observações:
 * - Assume que `Config` (config.js) já foi carregado antes deste arquivo
 * - Não manipula DOM nem depende de inputs HTML
 */

const Calculator = {
  /**
   * Calcula a emissão de CO2 em kg para a distância e meio de transporte fornecidos.
   * Retorna null em caso de parâmetros inválidos.
   *
   * @param {number} distanceKm - distância em quilômetros
   * @param {string} transportMode - 'bicycle' | 'car' | 'bus'
   * @returns {number|null} emissão em kg de CO2 (arredondada a 2 casas) ou null
   */
  calculateEmission(distanceKm, transportMode) {
    // Valida distância
    if (typeof distanceKm !== 'number' || Number.isNaN(distanceKm) || !isFinite(distanceKm) || distanceKm < 0) {
      return null;
    }

    // Valida transportMode
    if (typeof transportMode !== 'string' || !transportMode) return null;

    // Verifica disponibilidade de Config e emissionFactors
    if (typeof Config === 'undefined' || !Config || typeof Config.emissionFactors !== 'object') {
      return null;
    }

    const factor = Config.emissionFactors[transportMode];

    // Verifica se o fator existe e é um número válido
    if (typeof factor !== 'number' || Number.isNaN(factor) || !isFinite(factor)) {
      return null;
    }

    const emission = distanceKm * factor;

    // Arredonda para 2 casas decimais e retorna número (não string)
    const rounded = Math.round((emission + Number.EPSILON) * 100) / 100;
    return rounded;
  }
};

// Tornar acessível globalmente
if (typeof globalThis !== 'undefined') globalThis.Calculator = Calculator;

// Export para CommonJS (opcional)
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = Calculator;
}
