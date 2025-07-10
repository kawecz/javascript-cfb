// function filtroMaior(valor) {
//     if(valor >= 18) {
//         return valor
//     }
// }

const idades = [15,21,30,17,18,44,12,50]

const maior = idades.filter((v) => {
    if(v >= 18) {
        return v
    }
})

const menor = idades.filter((v) => {
    if(v < 18) {
        return v
    }
})

console.log(idades)
console.log(maior)
console.log(menor)