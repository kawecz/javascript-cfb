//Funções Geradoras em Javascript

/*
function* cores () {
    yield 'Vermelho'
    yield 'Verde'
    yield 'Azul'
}

const itc = cores()

console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)
*/

/*
function* perguntas() {
    const nome = yield 'Qual é o seu nome?'
    const esporte = yield 'Qual seu esporte favorito?'
    return `Seu nome é ${nome} e seu esporte favorito é ${esporte}`
}

const itr = perguntas()

console.log(itr.next().value)
console.log(itr.next('Kawe').value)
console.log(itr.next('Futebol').value)
*/

function* contador() {
    let i = 0;
    while(true) {
        yield i++
    }
}
const itr = contador()

let a = 0;
while(a < 5) {
    console.log(itr.next().value)
    a++
}