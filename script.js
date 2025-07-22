// Lista de links de câmeras públicas com vegetação/natureza
const cameraLinks = [
  // Estes links são exemplos — você pode trocá-los por outros que quiser
  "https://www.youtube.com/embed/epDHLmG8J2g?autoplay=1", // África do Sul - Safari
  "https://www.youtube.com/embed/XAf3sojzTxY?autoplay=1", // Japão - Jardim em tempo real
  "https://www.youtube.com/embed/6AkGxdM1RwM?autoplay=1", // Noruega - Floresta
  "https://www.youtube.com/embed/gRPGUdcRj0Y?autoplay=1", // Costa Rica - câmera na floresta
  "https://www.youtube.com/embed/6Ki3CZl6HyM?autoplay=1", // EUA - Jardim Botânico
  "https://www.youtube.com/embed/hHW1oY26kxQ?autoplay=1", // Islândia - Paisagem natural
];

let currentIndex = 0;

function changeStream() {
  currentIndex = (currentIndex + 1) % cameraLinks.length;
  document.getElementById('camFrame').src = cameraLinks[currentIndex];
}

// Carrega a primeira câmera ao abrir a página
window.onload = () => {
  document.getElementById('camFrame').src = cameraLinks[0];
};
