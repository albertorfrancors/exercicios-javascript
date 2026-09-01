// Exercício 7 — Encontrar o Maior Preço

const precos = [10, 50, 30, 80, 20];

// Função que encontra o maior valor
function encontrarMaior(lista) {
  let maior = lista[0];

  for (let i = 1; i < lista.length; i++) {
    if (lista[i] > maior) {
      maior = lista[i];
    }
  }

  return maior;
}

console.log(`O maior preço é: ${encontrarMaior(precos)}`);