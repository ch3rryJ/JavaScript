const tarefas = document.querySelectorAll(".tarefa")
const colunas = document.querySelectorAll(".tarefas")

tarefas.forEach(tarefa => {
    tarefa.addEventListener("dragstart", () => {
        tarefa.classList.add("arrastando")
    })
    tarefa.addEventListener("dragend", () => {
        tarefa.classList.remove(arrastando)
    })
})

colunas.forEach(coluna => {
    coluna.addEventListener("dragover", (e) => {
        e.preventDefault()
        const tarefaArrastando = document.querySelector(".arrastando")
        coluna.appendChild(tarefaArrastando)
    })
})