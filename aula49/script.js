
const p_array = document.querySelector("#array")
const verificar_btn = document.querySelector("input[type=submit]")
const resultado = document.querySelector("#resultado")

//

const elementos_array = [16,12,10,17,15,13,11,19]
p_array.style.color = 'green'
p_array.innerHTML = elementos_array

//

verificar_btn.addEventListener("click", (ev)=> {
    const ret = elementos_array.some((e,i)=>{
       if(e < 18) {
         resultado.innerHTML = "array não conforme na posição " + i 
       } else {
        resultado.innerHTML = "ok"
       }
       return e>=18
    })    
   
})


