const pessoa = {
    nome:"Kawe",
    canal: "NãoTem",
    curso: "JS e NodeJS",
    aulas: {
        aula01:"Intro",
        aula02:"Variáveis",
        aula03:"Condicional"
    }

}

// console.log(pessoa)
// console.log(pessoa.nome)
// console.log(pessoa.aulas.aula01)

const string_pessoa = '{"nome":"Kawe","canal":"NãoTem","curso":"JS e NodeJS","aulas":{"aula01":"Intro","aula02":"Variáveis","aula03":"Condicional"}}'

const s_json = JSON.stringify(pessoa)
const o_json = JSON.parse(string_pessoa)

console.log(pessoa)
console.log(s_json)
// console.log(typeof(pessoa))
// console.log(typeof(s_json))
console.log(o_json)