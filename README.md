# leandri-importados
Catálogo digital dinâmico utilizando Google Sheets como CMS. Projeto focado em performance mobile e automação de vendas via WhatsApp.
# 📦 Leandri Importados - Catálogo Digital Inteligente

Este é um projeto de catálogo digital desenvolvido para a **Leandri Importados**, focado na facilitação de encomendas de produtos vindos do Paraguai. A solução une a performance de um site estático com a flexibilidade de um CMS (Sistema de Gestão de Conteúdo) baseado em Google Sheets.

---

## 🚀 O Desafio
O cliente (importador) necessitava de uma forma rápida e gratuita de atualizar preços e stock sem depender de intervenção técnica constante ou de plataformas pagas de e-commerce.

## 💡 A Solução
Desenvolvi uma aplicação web que consome dados em tempo real de uma folha de cálculo do Google. 
- **O Administrador:** Edita apenas a planilha (preços, nomes, fotos).
- **O Cliente:** Visualiza um catálogo moderno, rápido e com botões de encomenda direta via WhatsApp.
- **O Sistema:** Processa os dados CSV e renderiza a interface de forma dinâmica.

## 🛠️ Tecnologias Utilizadas
- **HTML5 & CSS3** (Estrutura e Estilização)
- **Tailwind CSS** (Framework de utilitários para design responsivo e moderno)
- **JavaScript (ES6+)** (Manipulação do DOM e lógica de consumo de API)
- **PapaParse** (Biblioteca para parsing de dados CSV da planilha)
- **GitHub Pages** (Hospedagem gratuita e contínua)

## ✨ Funcionalidades
- [x] **Gestão Simplificada:** Atualização de produtos via Google Sheets.
- [x] **Conversão de Câmbio:** Lógica para cálculo de preço final (Dólar -> Real) com taxas personalizadas.
- [x] **Mobile First:** Interface otimizada para compras via smartphone.
- [x] **CTA Direto:** Botões de WhatsApp que já iniciam a conversa com o nome do produto selecionado.

---

## ⚙️ Como funciona a Integração
1. Os dados são inseridos numa **Google Sheet**.
2. A planilha é publicada como `.csv`.
3. O script `api.js` faz o fetch desses dados e o `main.js` renderiza os componentes no `index.html`.

## 📈 Impacto
Este projeto serve como um exemplo de como soluções *serverless* e ferramentas gratuitas podem ser integradas para criar ferramentas de negócio robustas e escaláveis.

---
Desenvolvido por [Mateus Cantos] - [@ArgonDroid]
