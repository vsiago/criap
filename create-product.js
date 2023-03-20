"use strict"
// Selecionar elementos

const btnAbrirModal = document.querySelector("#btnAbrirModal");
const modalCriarProduto = document.querySelector("#modalCriarProduto");
const btnClose = document.querySelector("#btnClose");


// Abrir modal Criar produto
btnAbrirModal.addEventListener("click", function openModal() {
  modalCriarProduto.style.display = "flex";
});

// Fechar modal
btnClose.addEventListener("click", function closeModal() {
  modalCriarProduto.style.display = "none";
});

// Trocar input por imagem
const inputPhoto = document.querySelector("#inputPhoto");
const inputFile = document.querySelector("#inputFile");

inputPhoto.addEventListener("click", () => {
  inputFile.click();
})


// Aparecer Preview da imagem
inputFile.addEventListener("change", () => {

  if(inputFile.files.lenght <= 0) {
    return
  }

  let reader = new FileReader();

  reader.onload = () => {
    inputPhoto.src = reader.result;
  }

  reader.readAsDataURL(inputFile.files[0]);
})

// 



const produtos = [];

function adicionarProduto(e) {
  e.preventDefault()
  
  const produto = {
    nome: document.querySelector('#name').value,
    preco: document.querySelector('#preco').value,
    descricao: document.querySelector('#descricao').value
  }
  
  
    produtos.push(produto);

  exibirProdutos()
}



const btnCriarProduto = document.querySelector('#btnCriarProduto')

btnCriarProduto.addEventListener('click', adicionarProduto)


//Saida de dados


function exibirProdutos() {
  const listaProdutos = document.getElementById("lista-produtos");
  listaProdutos.innerHTML = ''
  

  produtos.forEach(function(produto) {
    const item = document.createElement("li");
    item.classList.add("product-card")
    item.innerHTML = `
    <img id="productImg" src="./pizza-calabreza.png" alt="Imagem do produto">
    <div>
      <p class="product-name">${produto.nome}</p>
      <p class="price">${produto.preco}</p>
      <div class="amount-controller">
        <p class="amount">01</p>
        <button>+</button>
        <button>-</button>
      </div>        
    </div>
    `;
    listaProdutos.appendChild(item);
  });
}


// const listaDeEstabelecimentos = [
//   {
//     userLogin: {
//       user: "vsiago",
//       pass: "vsiago",
//       id: null,
//     },
//     products: {
//       name: "",
//       price: "",
//       qnt: "",
//     },
//     order: {},
//   },
//   {
//     userLogin: {
//       user: "isis",
//       pass: "isis",
//       id: null,
//     },
//     products: {
//       name: "",
//       price: "",
//       qnt: "",
//     },
//     order: {},
//   },
// ];
