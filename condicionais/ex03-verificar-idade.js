// Exercício 3 — Verificar Idade para Cadastro

// Receba uma idade
const idade = 20; // altere este valor para testar

if (idade >= 18) {
  console.log("Cadastro aprovado");
} else if (idade >= 13 && idade <= 17) {
  console.log("Cadastro permitido com responsável");
} else {
  console.log("Cadastro não permitido");
}