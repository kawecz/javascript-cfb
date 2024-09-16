/*
let n1 = [10,20,30]
let n2 = [11,22,33,44,55]
let n3 = [...n1]

console.log("N1: " + n1)
console.log("N2: " + n2)
console.log("N3: " + n3)

*/



/*
const soma = (v1,v2,v3) => {
    return v1 + v2 + v3 
}
 
let num1 = prompt("digite um valor")
let num2 = prompt("digite um valor")
let num3 = prompt("digite um valor")

let valores = [Number(num1) , Number(num2), Number(num3)]

alert(("A soma dos valores é : ") + soma(...valores))
*/

const objs1 = document.getElementsByTagName("div")
const objs2 = [...document.getElementsByTagName("div")]

objs2.forEach(element => {
   element.innerHTML = "oi"
}); 