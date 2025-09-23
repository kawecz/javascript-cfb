const div = document.querySelector("#div2");
// Aprendendo sobre a Coleção MAP em Javascript

let mapa = new Map();

mapa.set("curso", "javascript");
mapa.set("10", "kawê lindo e gostoso");
mapa.set("1", "aiiii");
mapa.set(1, 100);
mapa.set("Canal", 100);

mapa.delete("10")

console.log(mapa);

// div.innerHTML = mapa.get("curso")
// div.innerHTML = mapa.get("10")
// div.innerHTML = mapa.get("1")
// div.innerHTML = mapa.get(1)
// div.innerHTML = mapa.get("Canal")

if (mapa.has("Canal")) {
  div.innerHTML = "A chave existe na coleção " + mapa.size;
} else {
    div.innerHTML = "A chave não existe na coleção"
}

mapa.forEach((e)=>{
    console.log(e)
})