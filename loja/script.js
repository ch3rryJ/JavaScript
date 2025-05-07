//Criando Array com os produtos
const listaProdutos = [
    {id: 1, nome: "Chococat", preco: 40, imagem: "img/croche1.jpg"},
    {id: 2, nome: "Sylvanian", preco: 30, imagem: "img/croche2.jpg"},
    {id: 3, nome: "Gato Palhaço", preco: 35, imagem: "img/croche3.jpg"},
    {id: 4, nome: "Vaquinha Morango", preco: 35, imagem: "img/croche4.jpg"}
]
//Pegando os elementos do HTML
const containerProdutos = document.getElementById("produtos")
const barraPesquisa = document.getElementById("barraPesquisa")
const listaCarrinho = document.getElementById("listaCarrinho")
const botaoCarrinho = document.getElementById("botaoCarrinho")
const botaoLoja = document.getElementById("botaoLoja")
const divCarrinho = document.getElementById("carrinho")
const totalCarrinho = document.getElementById("totalCarrinho")
//Carrinho de compras
let carrinho = []
//Função que mostra os produtos
function mostrarProdutos(lista) {
    containerProdutos.innerHTML = ""
    lista.forEach(produto => {
        const card = document.createElement("div")
        card.className = "card"
        card.innerHTML = `
        <img src ="${produto.imagem}" alt ="${produto.nome}">
        <h3>${produto.nome}</h3>
        <p>${produto.preco}</p>
        <button onclick="adicionarCarrinho(${produto.id})">Adicionar ao carrinho</button>
        `
    containerProdutos. appendChild(card)
    })
}
//Adicionar carrinho
function adicionarCarrinho(idProduto) {
    const produtoSelecionado = listaProdutos.find(prod => prod.id === idProduto)
    const itemExistente = carrinho.find(item => item.id === idProduto)
    if(itemExistente) {
        itemExistente.quantidade += 1
    } else {
        carrinho.push({...produtoSelecionado, quantidade: 1})
    }
    atualizarCarrinho()
}
//Diminuir a quantidade no carrinho
function diminuirQuantidade(idProduto) {
    const itemExistente = carrinho.find(item => item.id === idProduto)
    if(itemExistente) {
        itemExistente.quantidade -= 1
        if(itemExistente.quantidade <= 0) {
            removerDoCarrinho(idProduto)
            return
        }
        atualizarCarrinho()
    }
}
//Remover do carrinho
function removerDoCarrinho(idProduto) {
    carrinho = carrinho.filter(item => item.id !== idProduto)
    atualizarCarrinho()
}
//Atualizar Carrinho
function atualizarCarrinho() {
    listaCarrinho.innerHTML = ""
    carrinho.forEach(item => {
        const li = document.createElement("li")
        li.innerHTML = `
            <span>${item.nome}</span>
            <span>${item.quantidade}</span>
            <span>${item.preco * item.quantidade}</span>
            <span>
                <button class="aumentar" onclick="adicionarCarrinho(${item.id})">+</button>
                <button class="diminuir" onclick="diminuirQuantidade(${item.id})">-</button>
                <button class="remover" onclick="removerDoCarrinho(${item.id})">Remover</button>
            </span>
        `
        listaCarrinho.appendChild(li)
    })
    calcularTotal()
}
//Calcular Toatl a pagar
function calcularTotal() {
    totalCarrinho.innerHTML = `<strong>Total: R$ ${total},00</strong>`
}
//Barra de pesquisa
barraPesquisa.addEventListener("input", () => {
    const textoPesquisa = barraPesquisa.value.toLowerCase()
    const produtosFiltrados = listaProdutos.filter(produto =>
        produto.nome.toLowerCase().includes(textoPesquisa)
    )
    mostrarProdutos(produtosFiltrados)
})
//Botão Ver Carrinho
botaoCarrinho.addEventListener("click", () => {
    containerProdutos.style.display = "none"
    barraPesquisa.style.display = "none"
    divCarrinho.style.display = "block"
    botaoCarrinho.style.display = "none"
    botaoLoja.style.display = "inline"
})
//Botao voltar para a loja
botaoLoja.addEventListener("click", () => {
    containerProdutos.style.display = "flex"
    barraPesquisa.style.display = "block"
    divCarrinho.style.display = "none"
    botaoCarrinho.style.display = "inline"
    botaoLoja.style.display = "none"
})
mostrarProdutos(listaProdutos)