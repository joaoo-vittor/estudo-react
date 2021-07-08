// Array Reduce

const numeros = [5, 1, 2, 4, 80, 20, 45, 12, 15, 19, 54, 27, 11, 32, 37]

const pessoas = [
  {nome: 'joao vitor', idade: 21},
  {nome: 'jose', idade: 15},
  {nome: 'maria silva', idade: 54},
  {nome: 'otavio', idade: 81},
  {nome: 'sofia', idade: 32},
]

console.log(numeros.reduce((acumulador, valor, index, array) => {
  return acumulador += valor
}, 0))

console.log(numeros.reduce((acumulador, valor, index, array) => {
  if (valor % 2 === 0) acumulador.push(valor)
  return acumulador
}, []))

console.log(numeros.reduce((acumulador, valor, index, array) => {
  if (valor % 2 !== 0) acumulador.push(valor)
  return acumulador
}, []))

console.log(numeros.reduce((acumulador, valor, index, array) => {
  acumulador.push(valor * 2)
  return acumulador
}, []))

console.log(numeros.reduce((acumulador, valor, index, array) => {
  if (valor % 2 === 0) acumulador += valor
  return acumulador
}, 0))



console.log(pessoas.reduce((acc, valor) => {
  if (acc.idade > valor.idade) return acc
  return valor
}, 0))
