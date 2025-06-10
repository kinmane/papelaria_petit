// Gera os cards de produtos
const lista = document.getElementById('produtos-lista');
produtos.forEach((produto, idx) => {
  const col = document.createElement('div');
  col.className = "col-12 col-md-4";
  col.innerHTML = `
  <div class="card h-100 shadow-sm position-relative">
    <a href="#" data-idx="${idx}" class="abrir-modal-produto d-block position-relative">
      <img src="${produto.imagem}" class="card-img-top" alt="${produto.nome}" style="object-fit:cover; height:200px;">
    </a>
    <div class="card-body">
      <h5 class="card-title">${produto.nome}</h5>
      <p class="card-text">${produto.descricao}</p>
    </div>
  </div>
  `;
  lista.appendChild(col);
});

// Evento para abrir o modal dinâmico
document.addEventListener('click', function(e) {
  const link = e.target.closest('.abrir-modal-produto');
  if (link) {
    e.preventDefault();
    const idx = link.getAttribute('data-idx');
    const produto = produtos[idx];
    const carouselInner = document.getElementById('carouselProdutoInner');
    carouselInner.innerHTML = produto.modelos.map((modelo, i) => `
      <div class="carousel-item${i === 0 ? ' active' : ''} text-center">
        <img src="${modelo.imagem}" class="d-block mx-auto mb-3" style="max-height:300px;">
        <h5>${modelo.titulo}</h5>
        <p>${modelo.texto}</p>
      </div>
    `).join('');
    // Reinicia o carrossel sempre do primeiro slide
    const carousel = new bootstrap.Carousel(document.getElementById('carouselProduto'));
    carousel.to(0);
    new bootstrap.Modal(document.getElementById('modalProduto')).show();
  }
});

// Gera os cards de serviços
const listaServicos = document.getElementById('servicos-lista');
servicos.forEach(servico => {
  const col = document.createElement('div');
  col.className = "col-12 col-md-4";
  col.innerHTML = `
    <div class="card h-100 shadow-sm">
      <img src="${servico.imagem}" class="card-img-top" alt="${servico.nome}" style="object-fit:cover; height:200px;">
      <div class="card-body">
        <h5 class="card-title">${servico.nome}</h5>
        <p class="card-text">${servico.descricao}</p>
      </div>
    </div>
  `;
  listaServicos.appendChild(col);
});