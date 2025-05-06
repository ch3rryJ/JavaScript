// JAVASCRIPT -> SETINTERVAL -> MAIN.JS

let contador = 0
let intervalo;

function iniciarContador() {
    intervalo = setInterval(function() {
        contador++
        console.log("Contador: "+contador)
    }, 1000)
}

function pararContador() {
    clearInterval(intervalo)
}

iniciarContador()