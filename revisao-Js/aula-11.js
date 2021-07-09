// Promises

function randomNumber(min, max) {
  min *= 1000
  max *= 1000
  return Math.floor(Math.random() * (max - min) + min)
}

function wait(msg, time) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== 'string') reject('ERRO: BAD VALUE!!!')

    setTimeout(() => {
      resolve(msg)
    }, time)
  })

}


wait('Frase 1', randomNumber(1,3))
  .then(resp => {
    console.log(resp)

    return wait(123, randomNumber(1, 3))
  })
  .then(resp => resp+'!!!!')
  .then(resp => {
    console.log(resp)
    return wait('Frase 3', randomNumber(1, 3))
  })
  .then(resp => {
    console.log(resp)
  })
  .then(() => {
    console.log('Eu serei o ultimo a ser execultado')
  })
  .catch(e => {
    console.log(e)
  })


console.log('Execultado antes da Promise!!!')

