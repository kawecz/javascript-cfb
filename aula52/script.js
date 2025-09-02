const div = document.querySelector("#div")
const btn = document.querySelector("button")
// Aprendendo sobre ARRAY em Javascript 

//---------------------------------------------------//


let cores = ["azul", "verde","vermelho",["claro", "escuro","médio"]];
let cursos = ["HTML", "CSS", "JavaScript", cores];

// cursos.push("C++") //push = armazenar ou adicionar ao array (ao final)

// cursos.push("Python")

// cursos.pop() //pop = retirar elementos do array

// cursos.unshift("Python") // add elemento no inicio

// cursos.shift() // Tira do inicio

console.log(cursos[3][3][2])
//-------------------------------------------------//

console.log(cursos);
cursos.map((e,i)=> {
    let p = document.createElement("p");
    p.innerHTML = e
    div.appendChild(p)

    //-------------------------------------//
    console.log(`Content: ${e} | Position: ${i + 1}` )
})





