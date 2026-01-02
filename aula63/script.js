const form = document.querySelector("form");
const reset_button = document.querySelector("input[type = button]");
const res = document.querySelector(".res");
const nome_carro = document.querySelector("#nome");
const carro_portas = document.querySelector("#numero_portas");

const t_militar = document.querySelector("#militar");
const t_normal = document.querySelector("#normal");
const municao = document.querySelector("#municao");
const blindagem = document.querySelector("#blindagem");

let carros = [];

const gerenciarExebicaoCarros = () => {
  res.innerHTML = "";
  carros.forEach((e) => {
    if (t_normal.checked) {
      const div = document.createElement("div");
      div.setAttribute("class", "carro");
      div.innerHTML = `Nome:${e.nome}</br>`;
      div.innerHTML += `Portas:${e.portas}</br>`;
      res.appendChild(div);
    } else {
      const div = document.createElement("div");
      div.setAttribute("class", "carro");
      div.innerHTML = `Nome:${e.nome}</br>`;
      div.innerHTML += `Portas:${e.portas}</br>`;
      div.innerHTML += `Blindagem:${e.blindagem}</br>`;
      div.innerHTML += `Munição:${e.municao}</br>`;
      res.appendChild(div);
    }
  });
};

t_militar.addEventListener("click", () => {
  municao.removeAttribute("disabled");
  blindagem.removeAttribute("disabled");
  municao.value = "";
  blindagem.value = "";
});
t_normal.addEventListener("click", () => {
  municao.setAttribute("disabled", "disabled");
  blindagem.setAttribute("disabled", "disabled");
  municao.value = "";
  blindagem.value = "";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (t_normal.checked) {
    const c = new Carro(nome_carro.value, carro_portas.value);
    carros.push(c);
  } else {
    const c = new Militar(
      nome_carro.value,
      carro_portas.value,
      municao.value,
      blindagem.value
    );
    carros.push(c);
  }
  gerenciarExebicaoCarros();
});

reset_button.addEventListener("click", () => {
  form.reset();
  res.innerHTML = "";
  carros = [];
});

class Carro {
  //classe pai
  constructor(nome, portas) {
    this.nome = nome;
    this.portas = portas;
    this.ligado = false;
    this.velocidade = 0;
    this.cor = undefined;
  }
  ligar = function () {
    this.ligado = true;
  };
  desligar = function () {
    this.ligado = false;
  };
  setCor = function (cor) {
    this.cor = cor;
  };
}

class Militar extends Carro {
  // classe filho
  constructor(nome, portas, blindagem, municao) {
    super(nome, portas);
    this.blindagem = blindagem;
    this.municao = municao;
    this.setCor("Verde");
  }

  atirar = function () {
    if (this.municao > 0) {
      this.municao--;
    } else {
      console.log("Sem munição");
    }
  };
}

// const c1 = new Carro("HV1", 4);
// c1.ligar;
// c1.setCor("Preto");

// const c2 = new Militar("Lutador", 4, 100, 5);

// for (i = 0; i < 4; i++) {
//   c2.atirar();
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
