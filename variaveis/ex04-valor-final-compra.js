// Exercício 4 — Calculando Valor Final de Compra

// Some os valores: 50, 30 e 20
const valor1 = 50;
const valor2 = 30;
const valor3 = 20;
const soma = valor1 + valor2 + valor3;

// Aplique 10% de desconto
const desconto = soma * 0.10;
const valorFinal = soma - desconto;

console.log(`Valor total: R$ ${soma}`);
console.log(`Valor com 10% de desconto: R$ ${valorFinal}`);