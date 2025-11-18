let pessoas = [];
const btn_add = document.querySelector("#btn_add");
const res = document.querySelector(".res");

const addDivPessoa = () => {
  res.innerHTML = "";

  pessoas.map((p) => {
    const div = document.createElement("div");

    div.setAttribute("class", "pessoa");

    div.innerHTML = `Nome: ${p.getNome()} <br/>Idade: ${p.getIdade()}`;

    res.appendChild(div);
  });
};

btn_add.addEventListener("click", (e) => {
  const nome = document.querySelector("#name").value;
  const idade = document.querySelector("#age").value;
  e.preventDefault();
  const Pessoa = {
    nome,
    idade,
    setNome: function (nome) {
      this.nome = nome;
    },
    setIdade: function (idade) {
      this.idade = idade;
    },
    getNome: function () {
      return this.nome;
    },
    getIdade: function () {
      return this.idade;
    },
  };
  // alert("click")
  Pessoa.setNome(nome);
  Pessoa.setIdade(idade);
  pessoas.push(Pessoa);
  addDivPessoa();

  console.log(pessoas);
});
