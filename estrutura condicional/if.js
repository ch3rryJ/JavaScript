//ESTRURTURA CONDICIONAL - IF ELSE
let idade = prompt("Qual sua idade?")
console.log("Sua idade é:", idade)

if (idade >= 18) {
    console.log("Você é maior de idade")
} else {
    console.log("Você é menor de idade")
}
console. log("-----------------------------------")
//Verificando se um número é par ou impar
let numero = prompt("Escolha um número:")
let resultado = numero % 2 //resto
if (resultado== 0) {
    console.log("O número é par")
} else {
    console.log("O numero é impar")
}
console. log("-----------------------------------")
//Avaliação do aluno
let nota1 = prompt("Qual a primeira nota:")
let nota2 = prompt("Qual a segunda nota:")
let total = (nota1 + nota2) / 2
if (total >= 7){
    console.log("Aprovado")
} else {
    console.log("Reprovado")
}