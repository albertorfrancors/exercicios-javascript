// Exercício 6 — Simular Busca de Produto

const produtos = ["camiseta", "notebook", "mouse", "cadeira"];

// Peça um nome (simulando entrada do usuário)
const busca = "mouse"; // altere este valor para testar

if (produtos.includes(busca)) {
  console.log("Produto encontrado");
} else {
  console.log("Produto não encontrado");
}