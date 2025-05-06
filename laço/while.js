let contador = 0
//inicia uma contagem do zero
while (contador <= 5) {
//continua enquanto a condição for verdade
    console.log(contador) // mostra o num atual
    contador++ //atualiza o valor do contador
}
//////////////////////////////////////////////////
console.log("-------------------------------------")
let controle = 5
while (controle >= 0) {
    console.log(controle)
    controle--//controle -= 1
//podemos fazer ele contar de forma regressiva
}
//////////////////////////////////////////////////
console.log("-------------------------------------")
let numero = 3
let multiplicador = 1
while (multiplicador <= 4) {
    let resultado = numero * multiplicador
    //console.log(resultado)
    console.log(numero, "x", multiplicador, "=", resultado) //assim fica mais bonito
    multiplicador += 1//outra opção para ++
}
////////////////////////////////////////////////////
console.log("-------------------------------------")
let palavra = prompt("Digite a palavra")
while (palavra != "oi") {
    palavra = prompt("Tente novamente:")
    if (palavra == "oi"){
        console.log("Acertou")
    }
}