//CADA PERGUNTA TEM:
// - A pergunta
// - as opçoes
// - a alternativa certa (começa no 0)
const perguntas = [
    {
        pergunta: "Qual é o principal gás responsável pela respiração dos seres humanos?",
        opcoes: ["Gás carbônico", "Gás hélio", "Oxigênio", "Nitrogênio"],
            correta: 2
    },
    {
        pergunta: "Qual desses astros é uma estrela?",
        opcoes: ["Lua", "Sol", "Marte", "Vênus"],
        correta: 1
    },
    {
        pergunta: "Qual é a fonte primária de energia para a Terra?",
        opcoes: ["Vento","Petróleo","Sol","Água"],
        correta: 2
    },
    {
        pergunta: " Como se chama o processo pelo qual as plantas produzem seu próprio alimento?",
        opcoes: ["Fotossíntese", "Respiração", "Germinação", "Digestão"],
            correta: 0
    },
    {
        pergunta: "A água ferve a quantos graus Celsius, ao nível do mar?",
        opcoes: ["50°C", "75°C", "90°C", "100°C"],
        correta: 3
    },
    {
        pergunta: "Qual desses órgãos faz parte do sistema respiratório humano?",
        opcoes: ["Estômago","Pulmão","Rim","Coração"],
        correta: 1
    },
    {
        pergunta: "Qual planeta é conhecido como o 'planeta vermelho'?",
        opcoes: ["Júpter", "Marte", "Saturno", "netuno"],
            correta: 1
    },
    {
        pergunta: "A camada da atmosfera que protege a Terra dos raios ultravioletas é chamada de:",
        opcoes: ["Camada de ozônio", "Estratosfera", "Troposfera", "Atmosfera"],
        correta: 0
    },
    {
        pergunta: "O que é a biodiversidade?",
        opcoes: ["Diversidade de climas no planeta","Tipo de solo de uma floresta","Quantidade de chuvas em uma região","Conjunto de todos os seres vivos de um ambiente"],
        correta: 3
    },
    {
        pergunta: "Qual destes materiais é biodegradável?",
        opcoes: ["Plástico","Vidro","Alumínio","Papel"],
        correta: 3
    }
]
// variaveis para controlar o quiz
let perguntaAtual = 0 //Qual pergunta esta senod mostrada
let pontuacao = 0 //quantidade de acertos
let erros = 0 //qauntidade de erros
let opcaoSelecionada = null //qual opcao o usuario selecionou

const pergunta = document.getElementById("pergunta")
const opcoes = document.getElementById("opcoes")
const botaoProxima = document.getElementById("proxima")
const quiz = document.getElementById("quiz")
const pontuacaoFinal = document.getElementById("pontuacao")
const valorPontuacao = document. getElementById("valor-pontuacao")
const botaoReiniciar = document.getElementById("reiniciar")
const errosContador = document.getElementById ("erros")
const acertos = document.getElementById("acertos")

// função que atualiza o placar
function atualizarPlacar() {
    acertos.textContent = pontuacao
    errosContador.textContent = erros
}
//função que mostra a pergunta atual
function mostrarPergunta() {
    // pega a pergunta atual
    const perguntaAtualObj = perguntas[perguntaAtual] 
    //mostra o texto da pergunta
    pergunta.textContent = perguntaAtualObj.pergunta
    opcoes.textContent = "" //limpa as opcoes anteriores
    //cria um abotão para cada opção de resposta
    perguntaAtualObj.opcoes.forEach((opcao, indice) => {
        const botao = document. createElement ("button")
        botao. textContent = opcao
        botao. classList.add("opcao")
        botao. addEventListener("click", () => selecionarOpcao(indice))
        opcoes. appendChild(botao)
    })
    opcaoSelecionada = null
    botaoProxima.disabled = true
}
//para quando o usuario escolher uma opção
function selecionarOpcao(indice) {
    opcaoSelecionada = indice
    const opcoes = document.querySelectorAll(".opcao")
    opcoes.forEach((opcao, i) => {
        opcao.classList.toggle("selecionada", i == indice)
    })
    botaoProxima.disabled = false //habilita o botão de proxima
}
function mostrarPontuacao() {
    quiz.classList.add("esconder")
    pontuacaoFinal.classList.remove("esconder")
    valorPontuacao.textContent = pontuacao
}
//funcao para ir para a proxima pergunta
botaoProxima.addEventListener("click", () => {
    if(opcaoSelecionada == perguntas[perguntaAtual].correta) {
        pontuacao++
    } else {
        erros++
    }
    atualizarPlacar()

    perguntaAtual++
    if(perguntaAtual < perguntas.length) {
        mostrarPergunta()
    } else {
        mostrarPontuacao()
    }
})
//botao para reinciar o quiz
botaoReiniciar.addEventListener("click", () => {
    //reseta todas as variaveis
    perguntaAtual = 0
    pontuacao = 0
    erros = 0
    //o quiz aparece e a pontuacao final some
    quiz.classList.remove("esconder")
    pontuacaoFinal.classList.add("esconder")

    atualizarPlacar()
    mostrarPergunta()
})
//inicia o quiz com a primeira pergunta
mostrarPergunta()