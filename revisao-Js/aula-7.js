// Filter + Map + Reduce

const numeros = [5, 1, 2, 4, 80, 20, 45, 12, 15, 19, 54, 27, 11, 32, 37]

console.log(numeros.filter(valor => valor % 2 === 0)
                   .map(valor => valor * 2)
                   .reduce((acc, v) => {
                     return acc += v
                   }, 0))



