// video-control.js
// Controla o intervalo de exibição do vídeo de fundo na arena do jogo.
// O vídeo inicia em um tempo específico e reinicia automaticamente ao atingir o final do intervalo.

// Controla o intervalo do vídeo de fundo
const video = document.getElementById('bg-video');
const startTime = 16; // segundos
const endTime = 52;   // segundos

// Ao carregar os metadados, inicia o vídeo no tempo definido
video.addEventListener('loadedmetadata', function () {
    video.currentTime = startTime;
});

// Reinicia o vídeo quando chega ao final do intervalo
video.addEventListener('timeupdate', function () {
    if (video.currentTime >= endTime) {
        video.currentTime = startTime;
    }
});
