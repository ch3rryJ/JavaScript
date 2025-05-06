const video = document.querySelector("video")
const filtro = document.querySelector("#filtro")
const capturar = document.querySelector("#capturar")
const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

// Ativar camera do usuário
navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
    video.srcObject = stream
  })
  .catch(err => {
    alert("Não foi possível acessar a camera")
  })
// Aplicando o filtro no vídeo
filtro.addEventListener("change", () => {
    video.style.filter = filtro.value
  })
  
  // Capturar imagem com o filtro
  capturar.addEventListener("click", () => {
    canvas.width = video.videoWidth
    canvas.height = video.videoHeight

    ctx.filter = filtro.value
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height)

    const imagem = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = imagem;
    link.download = "foto.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
  })