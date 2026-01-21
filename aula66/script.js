class NPC {
    static alerta = false
    constructor(energia) {
        this.energia = energia
    }
    info() {
        console.log(`Energia: ${this.energia} || Alerta: ${NPC.alerta ? "Sim" : "Nao"}`)
        console.log("-----------------------")
    }
    static setAlertar() {
        NPC.alerta = true
    }
}

const NPC1 = new NPC(100)
const NPC2 = new NPC(80)
const NPC3 = new NPC(50)
NPC.setAlertar()
NPC1.info()
NPC2.info()
NPC3.info()
