// Exercício 13 — Verificar se o Número é Primo

// Receba um número
const numero = 7; // altere este valor para testar

let divisores = 0;

for (let i = 1; i <= numero; i++) {
  if (numero % i === 0) {
    divisores++;
  }
}

if (divisores === 2) {
  console.log("É primo");
} else {
  console.log("Não é primo");
}