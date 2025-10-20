class Pessoa {
  constructor(pnome, pidade) {
    this.nome = pnome;
    this.idade = pidade;
  }

  getNome() {
    return this.nome;
  }

  getIdade() {
    return this.idade;
  }

  setNome(nome) {
    return (this.nome = nome);
  }

  setIdade(idade) {
    return (this.idade = idade);
  }

  info() {
    console.log(`Nome: ${this.nome}`);
    console.log(`Idade: ${this.idade}`);
    console.log("---------------------");
  }
}

let pessoas = [];

const btn_add = document.querySelector("#btn_add");
const Res = document.querySelector(".res");

const addPessoa = () => {
  Res.innerHTML = ""
    pessoas.map((e) => {
    const div = document.createElement("div");
    div.setAttribute("class", "pessoa");
    div.innerHTML = `Nome: ${e.getNome()} </br>Idade: ${e.getIdade()}`;
    Res.appendChild(div)
  });
};

btn_add.addEventListener("click", () => {
  const nome = document.querySelector("#name");
  const age = document.querySelector("#age");

  const p = new Pessoa(nome.value, age.value);

  pessoas.push(p);

  nome.value = "";
  age.value = "";

  nome.focus();
  console.log(pessoas);
  addPessoa();
});
