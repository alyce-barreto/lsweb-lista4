const listaDeCompras = {
  itens: [],

  adicionar(item) {
    this.itens.push(item);
    this.salvarNoLocalStorage();
  },

  remover(item) {
    const index = this.itens.findIndex(i => i.nome === item.nome);
    if (index !== -1) {
      this.itens.splice(index, 1);
      this.salvarNoLocalStorage();
    }
  },

  marcar(item) {
    const foundItem = this.itens.find(i => i.nome === item.nome);
    if (foundItem) {
      foundItem.comprado = true;
      this.salvarNoLocalStorage();
    }
  },

  desmarcar(item) {
    const foundItem = this.itens.find(i => i.nome === item.nome);
    console.log('foundItem =>', foundItem);
    if (foundItem) {
      foundItem.comprado = false;
      this.salvarNoLocalStorage();
    }
  },

  listar() {
    return this.itens;
  },

  salvarNoLocalStorage() {
    localStorage.setItem('listaDeCompras', JSON.stringify(this.itens));
    
  },

  carregarDoLocalStorage() {
    const data = localStorage.getItem('listaDeCompras');
    if (data) {
      this.itens = JSON.parse(data);
    }
  }
};

listaDeCompras.carregarDoLocalStorage();

export default listaDeCompras;
