# 📱 Guia de Deploy - Calculadora de CO₂ no GitHub Pages

Este guia fornece instruções passo a passo para publicar a Calculadora de CO₂ utilizando o **GitHub Pages**.

---

## 🎯 Objetivo

Publicar a aplicação web estática na internet de forma gratuita e acessível, utilizando o GitHub Pages como hosting.

---

## 📋 Pré-requisitos

- ✅ Conta no GitHub (gratuita em https://github.com)
- ✅ Git instalado no computador
- ✅ Arquivos do projeto prontos:
  - `index.html`
  - `css/style.css`
  - `js/routes-data.js`, `config.js`, `calculator.js`, `ui.js`, `app.js`

---

## 🚀 Passo a Passo

### **1️⃣ Criar um Repositório no GitHub**

1. Acesse https://github.com/new
2. Preencha os dados:
   - **Repository name:** `Calculadora-co2` (ou o nome desejado)
   - **Description:** "Calculadora de emissões de CO₂ para viagens"
   - **Public:** ✅ Marque como público (obrigatório para GitHub Pages grátis)
3. Clique em **"Create repository"**

---

### **2️⃣ Inicializar o Repositório Localmente**

Abra o **PowerShell** ou **Terminal** na pasta do projeto e execute:

```powershell
# Navegar até a pasta do projeto
cd C:\Users\ronal\Desktop\Calculadora-co2

# Inicializar repositório Git
git init

# Adicionar todos os arquivos
git add .

# Realizar commit inicial
git commit -m "Inicial: Calculadora de CO2 com HTML, CSS e JavaScript"

# Adicionar a origem remota (substitua USERNAME e REPO_NAME)
git remote add origin https://github.com/USERNAME/Calculadora-co2.git

# Renomear branch para 'main' (padrão do GitHub)
git branch -M main

# Enviar os arquivos para o GitHub
git push -u origin main
```

**Exemplo com dados reais:**
```powershell
git remote add origin https://github.com/Ronaldofcjr/Calculadora-co2.git
git push -u origin main
```

---

### **3️⃣ Configurar o GitHub Pages**

1. Acesse o repositório no GitHub
2. Clique em **Settings** (Configurações) no menu superior
3. Na barra lateral, clique em **"Pages"** (ou **"GitHub Pages")
4. Em **"Source"**, selecione:
   - **Branch:** `main`
   - **Folder:** `/ (root)`
5. Clique em **"Save"**

---

### **4️⃣ Aguardar o Deploy**

- O GitHub iniciará o deploy automaticamente
- **Tempo de propagação:** 1-5 minutos (às vezes até 10 minutos)
- Você receberá um aviso verde quando estiver pronto

---

### **5️⃣ Acessar a Aplicação**

Após o deploy, a aplicação estará disponível em:

```
https://USERNAME.github.io/Calculadora-co2/
```

**Exemplo com dados reais:**
```
https://Ronaldofcjr.github.io/Calculadora-co2/
```

Copie este link e compartilhe com outras pessoas!

---

## ✅ Validar o Deploy

Após publicar, teste a aplicação:

1. ✅ Acesse a URL do GitHub Pages
2. ✅ Verifique se o formulário carrega corretamente
3. ✅ Teste o datalist de cidades (deve aparecer ao digitar)
4. ✅ Calcule uma emissão (ex: São Paulo → Rio de Janeiro, 429 km, Carro)
5. ✅ Verifique se o resultado é exibido corretamente

---

## 🔄 Atualizar a Aplicação

Sempre que fizer mudanças no projeto, execute:

```powershell
# Adicionar mudanças
git add .

# Commit com mensagem descritiva
git commit -m "Descrição da alteração"

# Enviar para GitHub (atualiza o site automaticamente)
git push
```

O GitHub Pages atualizará o site em poucos minutos.

---

## 📝 Adicionar Link no README.md

Crie um arquivo `README.md` na raiz do projeto com:

```markdown
# Calculadora de CO₂

Calcule as emissões de CO₂ das suas viagens de forma simples e rápida.

## 🌐 Acesse Agora

[👉 Abrir a Calculadora](https://USERNAME.github.io/Calculadora-co2/)

## 🎨 Recursos

- ✅ Interface responsiva (desktop e mobile)
- ✅ Cálculo automático de distâncias entre cidades
- ✅ Suporte a múltiplos meios de transporte
- ✅ Resultado em tempo real

## 🛠️ Tecnologias

- HTML5
- CSS3
- JavaScript ES6+

## 📦 Estrutura

```
├── index.html
├── css/
│   └── style.css
└── js/
    ├── routes-data.js
    ├── config.js
    ├── calculator.js
    ├── ui.js
    └── app.js
```

## 👨‍💻 Desenvolvido por

Ronaldo
```

**Depois, adicione ao repositório:**

```powershell
git add README.md
git commit -m "Docs: Adicionar README.md"
git push
```

---

## 🐛 Troubleshooting

### **"Página não encontrada" (404)**

- ❌ Aguarde 5-10 minutos e recarregue a página (F5)
- ❌ Verifique se o repositório é **público**
- ❌ Confirme que selecionou a branch **`main`** nas Settings

### **Arquivos não carregam (CSS ou JS em branco)**

- ❌ Verifique se os caminhos são **relativos** (não use `c:/...`)
- ❌ Estrutura correta:
  ```
  /
  ├── index.html
  ├── css/style.css      ✅ Referência: href="css/style.css"
  └── js/app.js          ✅ Referência: src="js/app.js"
  ```

### **Formulário não funciona**

- ❌ Abra o **Console do navegador** (F12 → Console)
- ❌ Procure por erros de JavaScript
- ❌ Verifique se todos os scripts carregam na ordem correta:
  1. `js/routes-data.js`
  2. `js/config.js`
  3. `js/calculator.js`
  4. `js/ui.js`
  5. `js/app.js`

---

## 📊 Exemplos de Comandos Git Úteis

```powershell
# Ver status do repositório
git status

# Ver histórico de commits
git log --oneline

# Desfazer último commit (sem perder arquivos)
git reset --soft HEAD~1

# Ver branch atual
git branch

# Criar uma nova branch para desenvolvimento
git checkout -b feature/nova-funcao
```

---

## 🎓 Referências

- [Documentação oficial do GitHub Pages](https://docs.github.com/pt/pages)
- [Git Handbook](https://guides.github.com/introduction/git-handbook/)
- [HTML5 Semantic Web](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

---

## ✨ Dicas Extras

1. **Adicionar um favicon:**
   - Crie um arquivo `favicon.ico` na raiz
   - Adicione ao `<head>` do HTML:
     ```html
     <link rel="icon" href="favicon.ico" type="image/x-icon">
     ```

2. **Melhorar SEO:**
   - O `<title>` e `<meta description>` já estão configurados
   - Considere adicionar Open Graph tags para compartilhamento em redes sociais

3. **Monitorar visitas:**
   - GitHub Pages não fornece analytics nativamente
   - Considere usar Google Analytics ou similar

4. **Domínio customizado:**
   - Se quiser um domínio próprio, configure nas Settings → Pages → Custom domain

---

## 🎉 Parabéns!

Sua Calculadora de CO₂ está publicada e acessível na internet! 🚀

Compartilhe o link com amigos e contribua com a sustentabilidade.

---

**Última atualização:** 30 de janeiro de 2026
