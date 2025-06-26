const caixa = document.querySelector("#caixa1")
//const btn = document.querySelector("#c1")
const cursos = [...document.querySelectorAll(".curso.c1")]

caixa.addEventListener("click", (e)=> {
    console.log("click")
    console.log(e.target.innerHTML)
})

cursos.map((el) => {
    el.addEventListener("click", (e)=> {
        e.stopPropagation()
    })
})
