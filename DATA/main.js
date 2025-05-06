// JAVASCRIPT -> DATA -> MAIN.JS

let dataAtual = new Date()
console.log(dataAtual)

let dia = dataAtual.getDate()
let mes = dataAtual.getMonth()
let ano = dataAtual.getFullYear
console.log(`${dia}/${mes+1}/${ano}`) //dd/mm/aaaa

let horas = dataAtual.getHours() //0-23
let minutos = dataAtual.getMinutes() // 0-59
console.log(`${horas}:${minutos}`) //horas:minutos