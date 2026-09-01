// Exercício 9 — Função para Validar Email

// Função que valida se o texto contém "@"
function validarEmail(email) {
  if (email.includes("@")) {
    return "Email válido";
  } else {
    return "Email inválido";
  }
}

console.log(validarEmail("joao@email.com")); // Email válido
console.log(validarEmail("joaoemail.com"));  // Email inválido