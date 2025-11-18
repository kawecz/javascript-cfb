// class Carro {
//   //classe pai
//   constructor(nome, portas) {
//     this.nome = nome;
//     this.portas = portas;
//     this.ligado = false;
//     this.velocidade = 0;
//     this.cor = undefined;
//   }
//   ligar = function () {
//     this.ligado = true;
//   };
//   desligar = function () {
//     this.ligado = false;
//   };
//   setCor = function (cor) {
//     this.cor = cor;
//   };
// }

// class Militar extends Carro {
//   // classe filho
//   constructor(nome, portas, blindagem, municao) {
//     super(nome, portas);
//     this.blindagem = blindagem;
//     this.municao = municao;
//     this.setCor("Verde");
//   }

//   atirar = function () {
//     if (this.municao > 0) {
//       this.municao--;
//     } else {
//       console.log("Sem munição");
//     }
//   };
// }

// const c1 = new Carro("HV1", 4);
// c1.ligar;
// c1.setCor("Preto");

// const c2 = new Militar("Lutador", 4, 100, 5);

// for(i = 0; i < 4; i++) {
//     c2.atirar()
// }

// console.log(c1.nome);
// console.log(c1.portas);
// console.log(c1.ligado ? "sim" : "nao");
// console.log(c1.velocidade);
// console.log(c1.cor);
// console.log("------------------------------");
// console.log(c2.nome);
// console.log(c2.portas);
// console.log(c2.ligado ? "sim" : "nao");
// console.log(c2.velocidade);
// console.log(c2.cor);
// console.log(c2.blindagem);
// console.log(c2.municao);
// console.log("------------------------------");

class Pessoa {
    constructor(nome) {
        this.nome = nome
    }
}

const p = new Pessoa("Kawe")

console.log(p.nome)
