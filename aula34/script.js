const c1 = document.querySelector("#c1")
const cursosC1 = [...document.getElementsByClassName("curso c1")]
const cursosC2 = [...document.querySelectorAll(".curso.c2")]

cursosC1.map((el) => {
    el.addEventListener("click", ()=> {
        el.classList.toggle("importante")
    })
})

cursosC2.map((el) => {
    el.addEventListener("click", ()=>{
        el.classList.toggle("importante2")
    })
})