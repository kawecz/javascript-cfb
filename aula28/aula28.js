/*

Aprendendo sobre o método MAP em Javascript

*/

/*
const cursos = ["HTML", "CSS", "JavaScript", "PHP", "React"];
cursos.map((el, i) => {
  console.log(`Curso: ${el} -Posição do curso: ${i}`);
});
*/

/*
let el = document.getElementsByTagName("div");
el = [...el]

console.log(el)
el.map((e,i) => {
  e.innerHTML = "CFB Cursos"
})
*/

const el = document.getElementsByTagName("div");
const val = Array.prototype.map.call(el,({innerHTML})=> innerHTML)
console.log(val)
