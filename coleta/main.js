//main.js

//Funções matemáticas
let num = 4.7

//Arredondar números
console.log(Math.round(num)) //inteiro mais próximo
console.log(Math.floor(num)) //arredonda para baixo
console.log(Math.ceil(num)) //arredonda para cima

//Número Aleatório
console.log(Math.random()) //Número aleatório entra 0 e 1
console.log(Math.random()*10) //Número aleatório entra 0 e 10

//Funções de String
let texto = "Eu amo JavaScript"

//Manipular String
console.log(texto.toUpperCase()) //Deixa tudo maiusculo
console.log(texto.toLowerCase()) //Deixa tudo minusculo
console.log(texto.trim()) //Remove espaços antes e depois do texto

//lecalizar texto
console.log(texto.charAt(5)) //mostra a letra que esta nessa posição
console.log(texto.includes("javaScript")) //Verifica se tem a palavra

//trocar textos
console.log(texto.replace("amo","adoro"))

//funções númericas
let numero = "42.85"
console.log(parseInt(numero)) //converte String para número inteiro
console.log(parseFloat(numero)) //converte String para número decimal
console.log(Number(numero).toFixed(1)) //define quantas casas decimais vai mostrar
console.log(isNaN("abc"))//verdadeiro, não é um número
console.log(isNaN("123")) //falso,é um numero