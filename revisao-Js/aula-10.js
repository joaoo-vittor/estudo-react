// Métodos estáticos

class ControleRemoto {
  constructor(tv) {
    this.tv = tv
    this.volume = 0;
  }

  aumentar_volume() {
    this.volume += 2
  }
  
  abaixar_volume() {
    this.volume -= 2
  }

  // metódo estático
  static troca_pilha() {
    console.log('OK, vou trocar a pilha!!!')
  }
}


const c1 = new ControleRemoto('LG')
c1.aumentar_volume()
c1.aumentar_volume()
c1.aumentar_volume()

console.log(c1)

ControleRemoto.troca_pilha()

