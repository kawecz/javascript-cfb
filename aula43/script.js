const btn_select = document.querySelector("#btn_select")

btn_select.addEventListener("click", (evt)=> {
    const todosRadios = [...document.querySelectorAll("input[type = radio]")]
    let radioSelecionado = todosRadios.filter((ele,ind,arr) => {
        return ele.checked
    })
    radioSelecionado = radioSelecionado[0]
    //const cursoSelecionado = radioSelecionado.parentNode.textContent
    const cursoSelecionado = radioSelecionado.parentNode.textContent
    alert(`Curso selecionado ${cursoSelecionado}`)
    // console.log(todosRadios)
    // console.log(radioSelecionado)
    // console.log(cursoSelecionado)
})