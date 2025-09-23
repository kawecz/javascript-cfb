let valor1 = Number(document.querySelector("#n1").value) 
let valor2 = Number(document.querySelector("#n2").value) 
let btn = document.querySelector("button")

const result = document.querySelector("#res")



const operacoes = [
    //adição
    (a,b) => {
        return a + b
    },
    //subtração
    (a,b) => {
        return a - b
    },
    //multiplicação
    (a,b) => {
        return a * b
    }

]

btn.addEventListener("click", () => {
    result.innerHTML = `adição: ${operacoes[0](valor1,valor2)}`
})
