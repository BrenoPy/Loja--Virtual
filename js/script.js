const itens = [
  { id: 0, nome: 'banana', img: 'banana.jpg', quantidade: 0 },
  { id: 1, nome: 'maça', img: 'banana.jpg', quantidade: 0 },
  { id: 2, nome: 'uva', img: 'banana.jpg', quantidade: 0 },
];

inicializar = () => {
  var containerProdutos = document.getElementById('produtos');
  itens.map((val) => {
    containerProdutos.innerHTML +=
      `
    <div class="produto-single">
      <img src="` +
      val.img +
      `"/>
      <p>` +
      val.nome +
      `</p>
      <button>      <a key="` +
      val.id +
      `"href="#">Adicionar ao carrinho!</a></button>

    </div>
    `;
  });
};
inicializar();

atualizarCarrinho = () => {
  var containerCarrinho = document.getElementById('carrinho');
  containerCarrinho.innerHTML = '';
  itens.map((val) => {
    if (val.quantidade > 0) {
      containerCarrinho.innerHTML +=
        `
      <p>` +
        val.nome +
        ` | quantidade ` +
        val.quantidade +
        `</P>
        <hr>
      `;
    }
  });
};

var links = document.getElementsByTagName('a');

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function () {
    let key = this.getAttribute('key');
    itens[key].quantidade++;
    atualizarCarrinho();
    return false;
  });
}
