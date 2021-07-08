// Classes

class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
  }

  falar () {
    console.log(`${this.nome} esta falando.....`)
  }

  get_nome_completo() {
    console.log(`${this.nome} ${this.sobrenome}`)
  }

}


const p1 = new Pessoa('joao', 'barbosa')

console.log(p1.nome)
console.log(p1.sobrenome)

p1.falar()
p1.get_nome_completo()

