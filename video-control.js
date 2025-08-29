// Controla o intervalo do vídeo de fundo
const video = document.getElementById('bg-video');
const startTime = 16; // segundos
const endTime = 52;   // segundos
video.addEventListener('loadedmetadata', function () {
    video.currentTime = startTime;
});
video.addEventListener('timeupdate', function () {
    if (video.currentTime >= endTime) {
        video.currentTime = startTime;
    }
});
