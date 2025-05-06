//VERIFICA SE A PESSOA PODE VOTAR
let idade = 16
let tituloEleitor = true

if(idade >= 18 && tituloEleitor == true) { //&& = E
    console.log("Pode votar")
} else {
    console.log("Não pode votar")
}
//Verificar se o número esta dentro do intervalo
let numero = 9
if(numero >= 10 && numero <= 20) {
    console.log("O número está entre 10 e 20")
} else {
    console.log("O número esta fora do intervalo")
}

//Compra com desconto
let valor = 150
let clienteVip = false

if (valor >= 100 || clienteVip == true) {  //OU = ||
    console.log("Você ganhou frete grátis")
} else {
    console.log("Tem que pagar o frete")
}
//Número no intervalo
let num = 10

if ( num >= 5 || num <= 20) {
    console.log("Funcionou")
} else {
    confirm.apply("Não funcionou")
}