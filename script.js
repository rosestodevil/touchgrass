// Lista de links de câmeras AO VIVO que permitem embed
const cameraLinks = [
  "https://www.youtube.com/embed/mVZCyMf2GzY?autoplay=1&mute=1", // Explore.org - água + floresta
  "https://www.youtube.com/embed/hj-WIhvsR4g?autoplay=1&mute=1", // Explore.org - floresta africana
  "https://www.youtube.com/embed/TP9NDUhdUpM?autoplay=1&mute=1", // Jardim com beija-flores
  "https://www.youtube.com/embed/Wm_HZzFzwj8?autoplay=1&mute=1", // Praia + vegetação
  "https://www.youtube.com/embed/GkcCv_OEoBo?autoplay=1&mute=1"  // Parque natural
];

let currentIndex = 0;

function changeStream() {
  currentIndex = (currentIndex + 1) % cameraLinks.length;
  document.getElementById('camFrame').src = cameraLinks[currentIndex];
}

window.onload = () => {
  document.getElementById('camFrame').src = cameraLinks[0];
};
