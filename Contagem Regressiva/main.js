// CONTAGEM REGRESSIVA -> MAIN.JS
let intervalo
let texto = document.getElementById("contador")

function iniciarContagem() {
    clearInterval(intervalo)

    let campoData = document.getElementById("dataEvento")
    let dataEscolhida = campoData.value

    //Verifica se o usuário escolheu uma data
    if(!dataEscolhida) {
        texto.innerText= "Escolha uma data"
    }
    //cria um objeto da data e inicia a contagem 00:00
    let data = new Date(dataEscolhida + "T00:00:00")

    //Inicia a contagem regressiva e atualiza a cada segundo
    intervalo = setInterval(function() {
        atualizarContagem(data)
    }, 1000)
}
function atualizarContagem(dataFutura) {
    let agora = new Date() //Obtem a data e hora atual
    let diferenca = dataFutura - agora
    if (diferenca <= 0) {
        clearInterval(intervalo)
        texto.innerText = "O tempo acabou"
    }

    let dias = Math.floor(diferenca / (1000 * 60 * 60 * 24))
    let horas = Math.floor(diferenca % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    let minutos = Math.floor(diferenca % (1000 * 60 * 60 * 24) / (1000 * 60))
    let segundo = Math.floor(diferenca % (1000 * 60 * 60 * 24) / 1000)

    texto.innerText = `Faltam ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundo} segundos`
}