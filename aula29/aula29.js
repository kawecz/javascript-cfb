
//Usando o operador THIS dentro de funções em Javascript - Curso de Javascript Moderno - Aula 29 

function aluno(nome,nota) {
    this.nome  = nome
    this.nota = nota

    console.log(nome)
    console.log(nota)

    this.dados_anonimos = function() {
        setTimeout(function(){
            console.log(this.nome)
            console.log(this.nota)
        }, 2000)
    }

    this.dados_arrow = function() {
        setTimeout(() => {
            console.log(this.nome)
            console.log(this.nota)
        }, 2000)
    }
}

aluno("Kawe", 7)

