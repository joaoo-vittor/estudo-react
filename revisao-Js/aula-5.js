// Array Map

const numeros = [5, 1, 2, 4, 80, 20, 45, 12, 15, 19, 54, 27, 11, 32, 37]

const pessoas = [
  {nome: 'joao vitor', idade: 21},
  {nome: 'jose', idade: 15},
  {nome: 'maria silva', idade: 54},
  {nome: 'otavio', idade: 81},
  {nome: 'sofia', idade: 32},
]


const dobraNumsArr = numeros.map(valor => valor * 2)
console.log(dobraNumsArr)


const maiusculo = pessoas.map(obj => obj.nome.toUpperCase())
console.log(maiusculo)


console.log(pessoas.map(obj => ({idade: obj.idade})))

console.log(pessoas.map((obj, index) => ({id: index+1, idade: obj.idade})))
