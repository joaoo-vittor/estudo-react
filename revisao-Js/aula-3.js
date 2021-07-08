function falaoi(nome) {
  return `olá, ${nome}`
}

const falaoi2 = function() {
  return `Oiii`
}

// ArrowFunction
const arrFunc = nome => {
  return `Olá, ${nome}`
}

function print(func) {
  console.log(func())
}

const obj = {
  fala1() {
    console.log('Oiii')
  },
  fala2: function() {
    console.log('Ola')
  }
}

console.log(falaoi('joao'))
console.log(falaoi2())
console.log(arrFunc('joao'))

print(falaoi2)


obj.fala1()
obj.fala2()


