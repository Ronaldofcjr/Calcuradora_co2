# 🌍 Calculadora de CO₂

> Calcule as emissões de CO₂ das suas viagens de forma simples, rápida e responsável.

[![GitHub](https://img.shields.io/badge/GitHub-Ronaldofcjr/Calculadora--co2-blue?logo=github)](https://github.com/Ronaldofcjr/Calculadora-co2)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34C26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## 📱 Demonstração

🌐 **[Acesse a aplicação ao vivo](https://Ronaldofcjr.github.io/Calculadora-co2/)**

---

## 🎯 Sobre o Projeto

A **Calculadora de CO₂** é uma aplicação web estática que ajuda usuários a entender o impacto ambiental de suas viagens. Com uma interface intuitiva e responsiva, você pode:

- ✅ Consultar distâncias entre cidades pré-cadastradas
- ✅ Calcular emissões de CO₂ por meio de transporte
- ✅ Visualizar resultados em tempo real
- ✅ Usar em qualquer dispositivo (desktop, tablet, mobile)

### 🌱 Contribuição para a Sustentabilidade

Entender o impacto das nossas escolhas de transporte é o primeiro passo para uma vida mais sustentável. Esta calculadora torna esse conhecimento acessível a todos.

---

## ✨ Recursos Principais

- 🚗 **Múltiplos meios de transporte:** Bicicleta, Carro, Ônibus
- 📍 **Cálculo automático de distâncias:** Banco de dados de rotas pré-configurado
- 📊 **Resultado em tempo real:** Cálculo instantâneo ao enviar o formulário
- 📱 **Design responsivo:** Funciona perfeitamente em todos os tamanhos de tela
- ♿ **Acessibilidade:** Suporte a modo escuro, navegação por teclado
- ⚡ **Sem dependências externas:** 100% JavaScript puro
- 🔒 **Privacidade:** Todos os cálculos são realizados localmente no seu navegador

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Descrição |
|-----------|-----------|
| **HTML5** | Estrutura semântica e acessível |
| **CSS3** | Design responsivo com variáveis CSS e gradientes |
| **JavaScript ES6+** | Lógica pura sem frameworks ou bibliotecas |
| **GitHub Pages** | Hosting gratuito e deploy automático |
| **GitHub Actions** | CI/CD para deploy automático |

---

## 📦 Estrutura do Projeto

```
Calculadora-co2/
├── 📄 index.html                    # Página principal
├── 📄 README.md                     # Este arquivo
├── 📄 GITHUB_PAGES_DEPLOY.md        # Guia de deploy
├── 📁 css/
│   └── style.css                    # Estilos globais (responsivo, temas)
├── 📁 js/
│   ├── routes-data.js               # Banco de dados de rotas
│   ├── config.js                    # Configurações (fatores de emissão)
│   ├── calculator.js                # Lógica de cálculo
│   ├── ui.js                        # Integração com interface
│   └── app.js                       # Entry point e registrador de eventos
└── 📁 .github/
    └── workflows/
        └── deploy.yml               # Workflow de deploy automático
```

### 🔍 Descrição dos Módulos JavaScript

| Arquivo | Responsabilidade | Métodos |
|---------|------------------|---------|
| **routes-data.js** | Armazenar e gerenciar rotas entre cidades | `getAllCities()`, `findDistance()` |
| **config.js** | Centralizar configurações (fatores de emissão) | `populateDatalist()` |
| **calculator.js** | Realizar cálculos de emissão de CO₂ | `calculateEmission()` |
| **ui.js** | Integração com interface HTML | `init()`, `getSelectedTransport()`, `handleCalculate()` |
| **app.js** | Inicializar aplicação e registrar eventos | N/A |

---

## 🚀 Como Usar

### Via Web (Recomendado)

1. Acesse: **https://Ronaldofcjr.github.io/Calculadora-co2/**
2. Preencha os campos:
   - **Origem:** Selecione a cidade de partida
   - **Destino:** Selecione a cidade de chegada
   - **Distância (km):** Insira a distância (opcional — será preenchida automaticamente se disponível)
   - **Meio de Transporte:** Escolha um dos três modos
3. Clique em **"Calcular Emissão"**
4. Visualize o resultado em kg de CO₂

### Localmente (Desenvolvimento)

#### Pré-requisitos
- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Servidor HTTP local (opcional, mas recomendado)

#### Opção 1: Abrir diretamente
```bash
# Simplesmente abra o arquivo no navegador
# C:\Users\ronal\Desktop\Calculadora-co2\index.html
```

#### Opção 2: Com Live Server (VS Code)
```bash
# Instale a extensão "Live Server" no VS Code
# Clique em "Go Live" para servir a aplicação na porta 5500
# http://localhost:5500
```

#### Opção 3: Com Python (Terminal)
```bash
# Python 3.x
python -m http.server 8000

# Acesse em: http://localhost:8000
```

---

## 📊 Fatores de Emissão de CO₂

Os fatores utilizados (kg CO₂/km) são baseados em estudos ambientais:

| Meio de Transporte | Fator (kg CO₂/km) | Fonte |
|-------------------|------------------|-------|
| 🚲 Bicicleta | 0.000 | Zero emissão |
| 🚗 Carro | 0.120 | Média de carros modernos (gasolina) |
| 🚌 Ônibus | 0.089 | Por passageiro (transporte coletivo) |

**Exemplo de cálculo:**
- Distância: 100 km
- Meio: Carro
- Emissão = 100 × 0.12 = **12 kg CO₂**

---

## 🔧 Desenvolvimento

### Adicionar Novas Rotas

Edite `js/routes-data.js` e adicione no array `rotas`:

```javascript
{ 
  origin: 'Curitiba', 
  destination: 'São Paulo', 
  distance: 408 
}
```

### Modificar Fatores de Emissão

Edite `js/config.js` na propriedade `emissionFactors`:

```javascript
emissionFactors: {
  bicycle: 0,      // Bicicleta
  car: 0.12,       // Carro
  bus: 0.089,      // Ônibus
  train: 0.041     // Novo: Trem (exemplo)
}
```

### Personalizar Estilos

O arquivo `css/style.css` utiliza variáveis CSS para facilitar customização:

```css
:root {
  --color-primary: #2d8c5e;      /* Verde primário */
  --color-secondary: #5ba3c2;    /* Azul secundário */
  --color-accent: #f39c12;       /* Laranja destaque */
  /* ... mais variáveis */
}
```

---

## 📈 Fatores de Emissão por País

Se desejar adaptar para outros países, aqui estão referências:

- 🇧🇷 **Brasil:** Matriz energética limpa (hidrelétricas)
- 🇺🇸 **EUA:** Fator maior (mais carros, menos transporte público)
- 🇩🇪 **Alemanha:** Investimento em energia renovável

*Sugestão:* Crie um selector de país na interface para carregar fatores específicos.

---

## 🌐 Deploy no GitHub Pages

Para publicar sua própria versão:

### 1. Fork ou Clone o Repositório

```bash
git clone https://github.com/Ronaldofcjr/Calculadora-co2.git
cd Calculadora-co2
```

### 2. Fazer Push para Seu Repositório

```bash
git remote set-url origin https://github.com/SEU_USERNAME/Calculadora-co2.git
git push -u origin main
```

### 3. Ativar GitHub Pages

1. Vá em **Settings** → **Pages**
2. Selecione `main` como branch
3. Pasta: `/ (root)`
4. Clique em **Save**

### 4. Acessar a Aplicação

```
https://SEU_USERNAME.github.io/Calculadora-co2/
```

📚 **Guia completo:** Veja [GITHUB_PAGES_DEPLOY.md](GITHUB_PAGES_DEPLOY.md)

---

## 🔄 Deploy Automático com GitHub Actions

O projeto inclui um workflow de CI/CD que:

- ✅ Detecta mudanças na branch `main`
- ✅ Faz build automático (já é estático, sem build necessário)
- ✅ Publica no GitHub Pages em segundos

**Arquivo:** `.github/workflows/deploy.yml`

A cada `git push`, o site é atualizado automaticamente!

---

## 🧪 Testes Manuais

### Cenários de Teste

| Caso | Entrada | Resultado Esperado |
|------|---------|-------------------|
| Rota válida com distância | São Paulo → Rio, 429 km, Carro | 51.48 kg CO₂ |
| Rota automática | São Paulo → Rio (sem distância), Carro | 51.48 kg CO₂ (automático) |
| Bicicleta | Qualquer rota, Bicicleta | 0 kg CO₂ |
| Campo vazio | Deixar campos em branco | Mensagem de erro |
| Distância negativa | Distância: -100 | Mensagem de erro |

### Validação de Funcionalidades

- [ ] Datalist carrega com todas as cidades
- [ ] Cálculo funciona com e sem distância automática
- [ ] Resultado exibe corretamente com 2 casas decimais
- [ ] Design responsivo (teste em mobile)
- [ ] Modo escuro funciona
- [ ] Sem erros no console (F12)

---

## 🐛 Troubleshooting

### Problema: Datalist não aparece

**Solução:** Verifique se `Config.populateDatalist()` foi chamado em `UI.init()`

```javascript
// Em app.js, dentro de initializeApp()
UI.init();
```

### Problema: Cálculo retorna 0

**Solução:** Verifique se o meio de transporte foi selecionado e se existe em `Config.emissionFactors`

### Problema: CSS não carrega no GitHub Pages

**Solução:** Certifique-se de usar caminhos relativos:
```html
<!-- ✅ Correto -->
<link rel="stylesheet" href="css/style.css">

<!-- ❌ Errado -->
<link rel="stylesheet" href="/css/style.css">
<link rel="stylesheet" href="C:/Users/.../style.css">
```

---

## 🤝 Contribuição

Contribuições são bem-vindas! 

### Como Contribuir

1. **Fork** o repositório
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Faça commit das mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um **Pull Request**

### Ideias de Melhorias

- 🚂 Adicionar mais meios de transporte (trem, avião, navio)
- 🗺️ Integrar com API de mapas (Google Maps, Mapbox)
- 📱 Versão como app nativo (React Native, Flutter)
- 🌍 Suporte a múltiplos países com fatores regionais
- 📊 Gráfico de histórico de emissões
- 🔐 Salvar cálculos no localStorage
- 🌙 Tema escuro persistente

---

## 📄 Licença

Este projeto está licenciado sob a **MIT License** — veja o arquivo [LICENSE](LICENSE) para detalhes.

Você é livre para:
- ✅ Usar comercialmente
- ✅ Modificar o código
- ✅ Distribuir
- ✅ Usar em privado

Com a condição de incluir o aviso de licença.

---

## 👨‍💻 Desenvolvedor

**Ronaldo**

- 🐙 GitHub: [@Ronaldofcjr](https://github.com/Ronaldofcjr)



<div align="center">

### 🌱 Cada kg de CO₂ economizado conta.

**Calcule. Conscientize. Sustente.**

![Calculadora de CO₂](https://img.shields.io/badge/Calculadora-CO₂-green?style=for-the-badge&logo=github)

</div>

---

**Última atualização:** 30 de janeiro de 2026
