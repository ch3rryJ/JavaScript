//Número positivo, negativo ou zero
let numero = prompt("Escolha um número:")
if (numero > 0) {
    console.log("Positivo")
} else if (numero < 0){
    console.log("Negativo")
} else {
    console.log("Zero")
}
console.log("------------------------------------")
let nota = Number(prompt("Qual a nota?"))
if (nota >= 9) {
    console.log("Excelente")
} else if (nota >= 7) {
    console .log("Bom")
} else if (nota >= 5) {
    console.log("Regular")
} else {
    console.log("Ruim")
}
console.log("------------------------------------")
let valor = number (prompt("Qual o valor da compra?"))
if (valor >= 500) {
    console.log("Ganhou 20% de desconto")
} else if ( valor >= 300) {
    console.log("Ganhou 10% de desconto")
} else {
    console.log("Sem desconto")
}