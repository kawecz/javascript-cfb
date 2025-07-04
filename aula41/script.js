const caixa1 = document.querySelector("#caixa1")
const btn_c =[...document.querySelectorAll(".curso")]
const cursos = ["HTML", "CSS", "JavaScript", "PHP", "React", "MySQL"]

cursos.map((e,chave) => {
    const novo_elemento = document.createElement("div")
    novo_elemento.setAttribute("id","c"+ (chave + 1))
    novo_elemento.setAttribute("class","curso c1")
    novo_elemento.innerHTML = e

    const btn_lixeira = document.createElement("img")
    btn_lixeira.setAttribute("src", "./trash-solid.svg")
    btn_lixeira.setAttribute("class", "btn_lixeira")
    btn_lixeira.addEventListener("click", (evt)=> {
        console.log(evt.target)
        caixa1.removeChild(evt.target.parentNode)
    })
    
    
    novo_elemento.appendChild(btn_lixeira)
    caixa1.appendChild(novo_elemento)
})



