let titulo = document.getElementById("titulo")
//document = HTML
//getElementByID = pegue o elemento pelo id 
//logo, quando fizemos isso guardamos o que estava no HTML em uma variável no JS
console.log(titulo.innerText)
//------------------------------------------------------------------------------
let texto = document.getElementById("texto")
texto.innerText = "Texto Alterado"
texto.style.color = "blue"
// desse jeito trocamos o texto de uma tag
//-----------------------------------------------------------------------
let botao = document.getElementById("botao")
// quando clica acontece alguma coisa
botao.addEventListener("click", function() {
    alert("botão clicado")
})
//-------------------------------------------------------------------------
let duplo = document.getElementById("duplo")
duplo.addEventListener("dblclick", function () {
    duplo.style.backgroundColor = "red"
})
// Só acontece quando clica duas vezes
//--------------------------------------------------------------------------
let passe= document.getElementById("passe")
passe.addEventListener("mouseover", function () {
    passe.innerText = "O mouse esta aqui"
    passe.style.backgroundColor = "yellow"
}) // o mouseover é quando o mouse está sobre o elemento
passe.addEventListener("mouseout", function () {
    passe.innerText = "Passe o mouse aqui"
    passe.style.backgroundColor = "blue"
    passe.style.fontSize = "16px"
}) //o mouseout é quando o mouse está fora do elemento
