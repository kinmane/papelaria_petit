# Papelaria Petit

Este é o site institucional da **[Papelaria Petit](https://kinmane.github.io/papelaria_petit/)**, desenvolvido para apresentar os produtos, serviços, localização e facilitar o contato com clientes. O projeto utiliza HTML5, CSS3, Bootstrap 5 e JavaScript puro, com estrutura organizada para fácil manutenção e expansão.

## Funcionalidades

- **Página inicial** com carrossel dinâmico de promoções.
- **Página de produtos**: cards e modais gerados dinamicamente a partir de um arquivo JS, facilitando a inclusão de novos produtos e modelos.
- **Página de serviços**: cards dinâmicos para cada serviço oferecido.
- **Formulário de contato** com validação em tempo real e feedback visual.
- **Página "Quem Somos"** com apresentação da empresa e logo centralizada.
- **Página de localização** com mapa integrado do Google Maps.
- **Design responsivo** e visual alinhado à identidade da marca.

## Estrutura de Pastas

```
papelaria_petit/
│
├── img/                # Imagens do site (logo, produtos, serviços, etc)
│   ├── produtos/
│   └── servicos/
├── main.js
├── produtos.js
├── produtos-data.js
├── promocoes.js
├── style.css           # Estilos principais do site
├── index.html
├── produtos.html
├── contato.html
├── quem-somos.html
├── localizacao.html
└── README.md
```

## Como adicionar produtos, serviços ou promoções

- **Produtos:**  
  Edite o arquivo `produtos-data.js` e adicione um novo objeto ao array `produtos`. Cada produto pode ter vários modelos, cada um com sua imagem e descrição.

- **Serviços:**  
  No mesmo arquivo, adicione um novo objeto ao array `servicos`.

- **Promoções:**  
  Edite o arquivo `promocoes.js` e adicione/remova objetos do array `promocoes`.

## Tecnologias utilizadas

- HTML5
- CSS3 (com Bootstrap 5)
- JavaScript (ES6)
- Estrutura modular de arquivos

## Como rodar o projeto

1. Clone ou baixe este repositório.
2. Abra o arquivo `index.html` em seu navegador.
3. Para editar produtos, serviços ou promoções, altere os arquivos JS na raiz do projeto.
4. Certifique-se de que as imagens estejam nas pastas corretas (`img/produtos/` e `img/servicos/`).

## Observações

- O site é totalmente estático, não requer backend para funcionar.
- O formulário de contato é ilustrativo e não envia e-mails reais.
- https://kinmane.github.io/papelaria_petit/

---

Desenvolvido com carinho para a Papelaria Petit.