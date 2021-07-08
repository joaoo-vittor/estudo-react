// Arrays - Atribuição via desestruturação (destructuring assignment)

// let a = 'A'
// let b = 'B'
// let c = 'C'

// const nums = [b, c, a]; 

// [a, b, c] = nums;

// console.log(a, b, c)

const numeros = [1,2,3,4,5,6,7,8,9]

const [primeiroNum, segundoNum, ... resto] = numeros


console.log(primeiroNum, segundoNum, resto)
console.log(resto)

const nums = [[1,2,3],[4,5,6],[7,8,9]]
const[,[,,seis]] = nums

console.log(seis)


