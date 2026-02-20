class Carro {
    constructor(tipo,estagioTurbo) {
        this.turbo = new Turbo(estagioTurbo)
        if(tipo == 1) {
            this.velmax = 120 + this.turbo
            this.nome = "normal"
        } else if (tipo == 2) {
            this.velmax = 160
            this.nome = "esportivo"
        } else if (tipo == 3) {
            this.velmax = 200
            this.nome = "super esportivo"
        }

        this.velmax += this.turbo
    }
    info() {
        console.log(this.nome)
        console.log(this.velmax)
        console.log(this.turbo)
    }
}


class Turbo {
    constructor(e) {
        if(e == 0) {
            this.pot = 0
        }
        else if(e == 1) {
            this.pot = 50
        } else if (e == 2 ) {
            this.pot = 75
        } else if(e == 3) {
            this.pot == 100
        }
    }
}

class CarroEspecial extends Carro {
    constructor(estagioTurbo) {
        super(4,estagioTurbo) 
        this.nome = "Carro Especial"
        this.velmax = 300 + this.turbo.pot

    }
    info() {
        super.info()
    }
}


const c1  = new Carro(1,0)
const c2 = new Carro(1,1)
const c3 = new CarroEspecial(1)

c1.info()
c2.info()
c3.info()
