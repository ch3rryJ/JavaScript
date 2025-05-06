//GEOLOCATION -> SCRIPT.JS
const botao = document.getElementById("localizar")
const cordenadas = document.getElementById("cordenadas")
const iframeMapa = document.getElementById("mapa")

botao.addEventListener("click", () => {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(mostrarLocalizacao)
    } else {
        cordenadas.innerText = "Localização não compartilhada"
    }
})

function mostrarLocalizacao(posicao) {
    const lat = posicao.coords.latitude
    const lon = posicao.coords.longitide
    cordenadas.innerText = `Latitude: ${lat}, Longitude: ${lon}`

    iframeMapa.src = `https://maps.google.com/maps?q=${lat},${lon}&z=15&output=embed`;
}