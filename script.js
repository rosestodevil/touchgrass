const images = [
  'assets/imgs/grama1.jpg',
  'assets/imgs/grama2.jpg',
  'assets/imgs/grama3.jpg',
  'assets/imgs/grama4.jpg',
  'assets/imgs/grama5.jpg'
];

let index = 0;

function changeImage() {
  index = (index + 1) % images.length;
  document.getElementById("grassImage").src = images[index];
}

function toggleSound(e) {
  e.stopPropagation(); // impede que o clique troque a imagem
  const audio = document.getElementById("natureSound");
  audio.muted = !audio.muted;
}
