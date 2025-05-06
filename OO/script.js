class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade =  idade
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos`)
    }
}

const aluno1 = new Pessoa("Julia", 17)
//aluno1.apresentar();

class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
    }
    exibirInfo() {
        console.log(`Carro: ${this.marca} ${this.modelo} ${this.ano}`)
    }
}
const meuCarro = new Carro("Hyundai", "HB20", 2023)
//meuCarro.exibirInfo()

class Aluno {
    constructor(nome, nota) {
        this.nome = nome
        this.nota = nota 
    }
    verificarAprovacao() {
        if(this.nota >= 6) {
            console.log(`${this.nome} foi aprovado`)
        } else {
            console.log(`${this.nome} foi reprovado`)
        }
    }
}
const aluno = new Aluno("Joâo", 7)
aluno.verificarAprovacao()
const aluno2 = new Aluno("Julia", 10)
aluno2.verificarAprovacao()