function permitirSoltar(ev){
    ev.preventDefault()
}

function comecarArrastar(ev){
    ev.dataTransfer.setData("text", ev.target.id)
}

function soltar(ev){
    ev.preventDefault()
    const id = ev.dataTransfer.getData("text")
    const elemento = document.getElementById(id)
    ev.target.appendChild(elemento)
}