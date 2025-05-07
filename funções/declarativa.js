// SEM PARAMETRO
function mostrarMensagem() {
    console.log("ola")
}

mostrarMensagem() //Usamos isso para chamar a função

function contarAteTres() {
    for(let i = 1; i <= 3; i++) {
        console.log(i)
    }
}
contarAteTres()

// COM PARAMETRO
function somar(a,b) {
    let resultado = a + b
    return resultado
}
console.log(somar(3,7))
console.log(somar(10,3))
console.log(somar(8,125))

function aoQuadrado(numero) {
    let quadrado = numero * numero
    return quadrado
}
console.log(aoQuadrado(5))
console.log(aoQuadrado(8))
console.log(aoQuadrado(251))