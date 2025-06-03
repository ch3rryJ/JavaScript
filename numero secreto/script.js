let numeroSecreto
let tentativas = 0
const maxTentativas = 10
let historico = []

function gerarNumeroSecreto() {
    numeroSecreto = Math.floor(Math.random() * 100) + 1
    tentativas = 0
    historico = []
    document.getElementById("mensagem").textContent = ""
    document.getElementById("listaTentativas").textContent = "Nenhuma"
    document.getElementById("palpite").value = ""
    document.getElementById("palpite").disabled = false
    document.getElementById("botaoTentar").disabled = false
}

function verificarPalpite() {
    const input = document.getElementById("palpite")
    const palpite = parseInt(input.value)

    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        alert("Escolha um número entre 1 e 100!")
        return
    }

    tentativas++
    historico.push(palpite)
    document.getElementById("listaTentativas").textContent = historico.join(", ")

    if (palpite === numeroSecreto) {
        document.getElementById("mensagem").textContent = `Parabéns! Você acertou, número: ${palpite}`
        document.getElementById("imagem").src = "img/aberto.png"
        encerrarJogo()
    } else if (tentativas >= maxTentativas) {
        document.getElementById("mensagem").textContent = `Suas chances acabaram! A quantidade era ${numeroSecreto}.`
        encerrarJogo()
    } else if (palpite < numeroSecreto) {
        document.getElementById("mensagem").textContent = `É um numero maior que esse!`
    } else {
        document.getElementById("mensagem").textContent = `É um número menor que esse!`
    }

    input.value = ""
}

function encerrarJogo() {
    document.getElementById("palpite").disabled = true
    document.getElementById("botaoTentar").disabled = true
}

function reiniciarJogo() {
    gerarNumeroSecreto()
}

window.onload = gerarNumeroSecreto
