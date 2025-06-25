const cursos = [...document.querySelectorAll(".c1")]
const button = document.querySelector("#btn")
const button2 = document.querySelector("#btn2")
const container1 = document.querySelector("#cont1")
const container2 = document.querySelector("#cont2")

cursos.map((el) => {
    el.addEventListener("click", (ev) => {
        el = ev.target
        el.classList.toggle("selecionado")
        console.log(`${el.innerHTML} clicked`)
    })

})

    
button.addEventListener("click", ()=> {
    const CursoSelecionado = [...document.querySelectorAll(".selecionado")]
    CursoSelecionado.map((el) => {
        container2.appendChild(el)
    })
    //console.log(CursoSelecionado)
})

button2.addEventListener('click',()=>{
   const CursoSelecionado = [...document.querySelectorAll(".selecionado")]
    CursoSelecionado.map((el)=>{
    container1.appendChild(el)
   })

})




