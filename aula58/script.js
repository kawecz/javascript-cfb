class Carro {
    constructor (pnome, ptipo) {
        this.nome = pnome
        if(ptipo == 1) {
            this.tipo = 'Esportivo'
            this.velmax = 300
        }else if(ptipo == 2) {
            this.tipo = 'Utilitário'
            this.velmax = 100
        }else if(ptipo == 3) {
            this.tipo = 'Passeio'
            this.velmax = 160
        }else {
            this.tipo = 'Militar'
            this.velmax = 180
        } 
         
    }
      info() {
            console.log(`Nome: ${this.nome}`)
            console.log(`Tipo: ${this.tipo}`)
            console.log(`Vel.max: ${this.velmax}`)
        }
}
let c1 = new Carro("Rapidão", 2)

c1.info()