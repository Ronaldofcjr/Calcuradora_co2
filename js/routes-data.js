/**
 * RoutesDB - armazenamento simples de rotas para a Calculadora de CO2
 * - Propriedade `rotas`: array de objetos { origin, destination, distance }
 * - Métodos: getAllCities(), findDistance(origin, destination)
 *
 * O objeto é anexado a `globalThis` como `RoutesDB` para uso direto no navegador.
 */

const RoutesDB = {
  // Exemplo de rotas iniciais (pode ser substituído dinamicamente)
  rotas: [
    { origin: 'São Paulo', destination: 'Rio de Janeiro', distance: 429 },
    { origin: 'São Paulo', destination: 'Belo Horizonte', distance: 586 },
    { origin: 'Brasília', destination: 'Goiânia', distance: 209 },
    { origin: 'Curitiba', destination: 'Florianópolis', distance: 300 }
  ],

  /**
   * Retorna um array único com todas as cidades (origin + destination),
   * sem duplicatas, ordenado alfabeticamente.
   * Deduplicação é feita de forma case-insensitive, preservando a
   * capitalização da primeira ocorrência.
   */
  getAllCities() {
    const map = new Map(); // chave: normalized name -> valor: original trimmed name

    this.rotas.forEach((r) => {
      const orig = (r.origin || '').toString().trim();
      const dest = (r.destination || '').toString().trim();

      const keyOrig = orig.toLowerCase();
      const keyDest = dest.toLowerCase();

      if (orig && !map.has(keyOrig)) map.set(keyOrig, orig);
      if (dest && !map.has(keyDest)) map.set(keyDest, dest);
    });

    // Obter valores preservando a capitalização original da primeira ocorrência
    const cities = Array.from(map.values());

    // Ordenação alfabética sensível ao idioma (pt-BR)
    cities.sort((a, b) => a.localeCompare(b, 'pt-BR', { sensitivity: 'base' }));

    return cities;
  },

  /**
   * Procura a distância entre duas cidades.
   * Normaliza as entradas (trim + lowercase) e verifica ambas as direções.
   * Retorna a distância (number) se encontrado, ou null caso contrário.
   *
   * @param {string} origin
   * @param {string} destination
   * @returns {number|null}
   */
  findDistance(origin, destination) {
    if (!origin || !destination) return null;

    const norm = (s) => s.toString().trim().toLowerCase();
    const o = norm(origin);
    const d = norm(destination);

    for (const r of this.rotas) {
      const ro = (r.origin || '').toString().trim().toLowerCase();
      const rd = (r.destination || '').toString().trim().toLowerCase();

      // verificar origem -> destino
      if (ro === o && rd === d) return Number(r.distance);

      // verificar destino -> origem (rota bidirecional)
      if (ro === d && rd === o) return Number(r.distance);
    }

    return null;
  }
};

// Tornar acessível globalmente (funciona em navegadores e em outros ambientes)
if (typeof globalThis !== 'undefined') {
  globalThis.RoutesDB = RoutesDB;
}

// Export opcional para módulos (não quebra quando não existe)
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = RoutesDB;
}
