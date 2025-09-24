const div = document.querySelector("#div2");
const btn_add = document.querySelector("#btn1");
const btn_remove = document.querySelector("#btn2");
const btn_send = document.querySelector("#btn3");

let counter = 0;

// Aprendendo sobre a Coleção SET

// let musicas = new Set(["Música 1", "Música boa", "Música 10"]);

// musicas.add("O amor e o Tempo");
// musicas.add("Amei te ver");

// console.log(musicas)

// // musicas.forEach((e) => {
// //   div.innerHTML += e + " </br>"
// // })

// for (m of musicas) {
//   div.innerHTML += m + "</br>";
// }

// btn.addEventListener("click", () => {
//   musicas.clear();
//   div.innerHTML = "";
//   console.log(musicas)
// });

//---------------------------------------------------------------------//

div.innerHTML = counter


btn_add.addEventListener("click", () => {
  return div.innerHTML = counter += 1
})
btn_remove.addEventListener("click", () => {
  return div.innerHTML = counter -= 1
})

btn_send.addEventListener("click", () => {
  alert("Sent!")
  console.log(counter)
})

