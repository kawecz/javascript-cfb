const btn_select = document.querySelector("#btn_select")
const btn_remove = document.querySelector("#btn_remove")

const btn_add_antes = document.querySelector("#btn_add_antes")
const btn_add_depois = document.querySelector("#btn_add_depois")
const nomeCurso = document.querySelector("#nome_curso")

const container = document.querySelector(".container2")
const cursos = ["HTML", "CSS", "JavaScript", "PHP", "React", "MySQL", "ReactNative"]

let indice = 0

const criarNovoCurso = (curso) => {
    const novoElemento = document.createElement('div')
    novoElemento.setAttribute("id", "c" + indice)
    novoElemento.setAttribute("class", "curso c1")
    novoElemento.innerHTML = curso

    const comandos = document.createElement("div")
    comandos.setAttribute("class", "comandos")

    const rb = document.createElement("input")
    rb.setAttribute("type", "radio")
    rb.setAttribute("name", "rb_curso")

    comandos.appendChild(rb)
    novoElemento.appendChild(comandos)

    return novoElemento
}

cursos.map((el, chave)=> {
    const novoElemento = criarNovoCurso(el)
    container.appendChild(novoElemento)
    indice++
})



const radioSelecionado = () => {
    const todosRadios = [...document.querySelectorAll("input[type = radio]")]
    const radioSelecionado = todosRadios.filter((ele,ind,arr) => {
        return ele.checked
    })
    return radioSelecionado[0]
}

btn_select.addEventListener("click", (evt)=> {
    //const cursoSelecionado = radioSelecionado.parentNode.textContent
    const rs = radioSelecionado()
    if(rs != undefined) {
        const cursoSelecionado = rs.parentNode.parentNode.textContent
        alert(`Curso selecionado ${cursoSelecionado}`)
    } else {
        alert("Nenhum curso selecionado")
    }
    
    // console.log(todosRadios)
    // console.log(radioSelecionado)
    // console.log(cursoSelecionado)
})

btn_remove.addEventListener("click", (evt)=> {
    const rs = radioSelecionado()
    const cursoSelecionado = rs.parentNode.parentNode
    
    if(rs != undefined) {
        cursoSelecionado.remove()
    } else {
        alert("Nenhum curso Selecionado")
    }
})

btn_add_antes.addEventListener("click", (evt)=>{
    const rs = radioSelecionado()
    try {
        if(nomeCurso.value != "") {
            const cursoSelecionado = rs.parentNode.parentNode
            const novoCurso = criarNovoCurso(nomeCurso.value)
            container.insertBefore(novoCurso, cursoSelecionado)
        } else {
            alert("Digite o nome do curso")
        } 
    }catch(ex) {
            alert("Selecione um curso")
        }    
})

btn_add_depois.addEventListener("click", (evt)=>{
    const rs = radioSelecionado()
     try {
        if(nomeCurso.value != "") {
            const cursoSelecionado = rs.parentNode.parentNode
            const novoCurso = criarNovoCurso(nomeCurso.value)
            container.insertBefore(novoCurso, cursoSelecionado.nextSibling)
        } else {
            alert("Digite o nome do curso")
        } 
    } catch(ex) {
            alert("Selecione um curso")
        }  
})