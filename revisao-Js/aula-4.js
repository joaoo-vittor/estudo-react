// Array filter

const numeros = [5, 1, 2, 4, 80, 20, 45, 12, 15, 19, 54, 27, 11, 32, 37]

const numerosfiltrados = numeros.filter((valor, index, array) => {
  // console.log(index, array)
  return valor > 10 
})

console.log(numerosfiltrados)
console.log()


const pessoas = [
  {nome: 'joao vitor', idade: 21},
  {nome: 'jose', idade: 15},
  {nome: 'maria silva', idade: 54},
  {nome: 'otavio', idade: 81},
  {nome: 'sofia', idade: 32},
]

const newArr = pessoas.filter(valor => valor.nome.length >= 5 && valor.idade > 50)

console.log(newArr)
