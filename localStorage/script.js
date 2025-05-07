//  QUANDO CARREGAR A PÁGINA, MOSTRAR O QUE ESTAVA SALVO
window.onload = function() {
    const textoSalvo = localStorage.getItem("minhaAnotacao")
    if(textoSalvo) {
        document.getElementById("anotacao").value = textoSalvo
    }
}

//  SALVAR QUANDO CLICAR NO BOTÃO
function salvarAnotacao() {
    const conteudo = document.getElementById("anotacao").value 
    localStorage.setItem("minhaAnotacao", conteudo)
    alert("Nota salva com sucesso")
}