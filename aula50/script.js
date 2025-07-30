
const p_array = document.querySelector("#array")
const reduzir_btn = document.querySelector("input[type=submit]")
const resultado = document.querySelector("#resultado")

//

const elementos_array = [1,2,3,4,5]
let ant = []
let atu = []
let dobro = []
p_array.innerHTML = elementos_array
//

reduzir_btn.addEventListener("click", (ev)=> {
    resultado.innerHTML =  elementos_array.reduce((anterior,atual,posicao)=>{
        ant.push(anterior)
        atu.push(atual)
        dobro.push(atual * 2)
        return atual + anterior
    })   
    resultado.innerHTML = "<br/>" + ant + "<br/>" + atu + "<br/>" + dobro
})  


