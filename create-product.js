"use strict"
// Selecionar elementos

const btnCriarProduto = document.querySelector("#btnCriarProduto");
const modalCriarProduto = document.querySelector("#modalCriarProduto");
const btnClose = document.querySelector("#btnClose");


// Abrir modal Criar produto
btnCriarProduto.addEventListener("click", function openModal() {
  modalCriarProduto.style.display = "flex";
});

// Fechar modal
btnClose.addEventListener("click", function closeModal() {
  modalCriarProduto.style.display = "none";
});

// Trocar input por imagem
const inputPhoto = document.querySelector("#inputPhoto")
const inputFile = document.querySelector("#inputFile")

inputPhoto.addEventListener("click", () => {
  inputFile.click()
})


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
