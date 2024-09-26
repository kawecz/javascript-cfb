let n = 0
let max = 47
let pares = 0
let impar = 0
//while(n < max) {
//    console.log("CBF Cursos - " + n)
//   if( n > 10) {
//       break
//    }
//   n++
//}

for (let i = n; i < max; i++) {
    //console.log("CBF Cursos - " + i)
   if( i % 2 == 0) {
    pares++
   } else if ( i % 2 != 0 ) {
    impar++
   }
}
console.log("Quantidade de pares: " + pares)
console.log("Quantidade de pares: " + impar)
console.log("Fim do programa")