const btn_select = document.querySelector("#btn_select")
const btn_remove = document.querySelector("#btn_remove")

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
        const cursoSelecionado = rs.parentNode.textContent
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
    const cursoSelecionado = rs.parentNode
    
    if(rs != undefined) {
        cursoSelecionado.remove()
    } else {
        alert("Nenhum curso Selecionado")
    }
})