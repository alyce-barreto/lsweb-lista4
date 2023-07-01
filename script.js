import listaDeCompras from "./lista.js";

const addItemForm = document.getElementById("addItemForm");
const itemList = document.getElementById("itemList");

function toggleCheck(values) {
  if (values.comprado) {
    listaDeCompras.desmarcar(values);
  } else {
    listaDeCompras.marcar(values);
  }
}

function refreshItemList() {
  itemList.innerHTML = "";
  const items = listaDeCompras.listar();
  console.log("lista de items", items);
  items.forEach((item) => {
    const row = createItemRow(item);
    itemList.appendChild(row);
  });
}

function createItemRow(item) {
  const row = document.createElement("tr");
  row.onclick = function () {
    toggleCheck(item);

    refreshItemList();
  };
  row.innerHTML = `
    <td>${item.nome}</td>
    <td>${item.preco}</td>
    <td><input type="checkbox" ${item.comprado ? "checked" : ""}></td>
    <td>
      <button class="removerBtn">Remover</button>
    </td>
  `;

  const removerBtn = row.querySelector(".removerBtn");
  removerBtn.addEventListener("click", () => {
    listaDeCompras.remover(item);
    refreshItemList();
  });

  return row;
}

addItemForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const itemName = document.getElementById("itemName").value;
  const itemPrice = parseFloat(document.getElementById("itemPrice").value);

  const item = {
    nome: itemName,
    preco: itemPrice,
    comprado: false,
  };

  console.log(item);

  listaDeCompras.adicionar(item);
  addItemForm.reset();
  refreshItemList();
});

window.addEventListener("load", () => {
  refreshItemList();
});
