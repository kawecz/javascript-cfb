
const p_array = document.querySelector("#array")
const verificar_btn = document.querySelector("input[type=submit]")
const resultado = document.querySelector("#resultado")

//

const elementos_array = [21,25,19,20,16,18,22]
p_array.style.color = 'green'
p_array.innerHTML = elementos_array

//

verificar_btn.addEventListener("click", (ev)=> {
    const ret = elementos_array.every((e,i)=>{
       if(e < 18) {
         resultado.innerHTML = "array não conforme na posição " + i 
       } else {
        resultado.innerHTML = "ok"
       }
       return e>=18
    })    
   
})


