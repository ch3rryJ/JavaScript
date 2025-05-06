let contador = 0
let contador1 = 0
while (contador != 5) {
//verifica primeiro, executa depois
    console.log("while:", contador)
    contador++
}
do { //executa primeiro, verifica depois
    console.log("do while", contador1)
    contador1++
} while (contador1 != 5)

//SEGUNDO EXEMPLO
let numero = 5
do {
    console.log(numero)
    numero -= 2
} while(numero >= 0)

//TERCEIRO EXEMPLO
do { 
    let idade = prompt("Qual a sua idade?")
    if (idade > 0) {
        console.log("Idade valida")
    }
    else {
        console.log("Idade invalida")
    }
} while (idade >= 0)