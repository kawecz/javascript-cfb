
const p_array = document.querySelector("#array")
const text_input = document.querySelector("input[type=text]")
const find_submit = document.querySelector("input[type=submit]")
const resultado = document.querySelector("#resultado")


const elementos_array = [1,2,3]

p_array.style.color = "green"
p_array.innerHTML = elementos_array

find_submit.addEventListener("click",(evt)=> {
    let posição = 0
    const pesq = elementos_array.find((e,i)=>{
        if(e == text_input.value) {
            posição = i + 1
            return true
        }
    })    
    if (pesq != undefined) {
        resultado.innerHTML = `Valor encontrado: ${pesq} | posição: ${posição}`
    } else {
        resultado.innerHTML = "valor não encontrado"
    }
    
} )