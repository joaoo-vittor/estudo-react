// Objetos - Atribuição via desestruturação (destructuring assignment)

const pessoa = {
  nome: 'Joao',
  sobrenome: 'barbosa',
  idade: 22,
  endereco: {
    rua: 'tal',
    numero: 12345
  }
}

// Atribuição via desestruturação
const { nome, sobrenome: lastname, 
       cep = 1234, endereco: { rua: r = 'rua', numero } } = pessoa;

const { nome: n, ...resto} = pessoa;

console.log(nome, lastname, cep)
console.log(r, numero)
console.log(n, resto)
