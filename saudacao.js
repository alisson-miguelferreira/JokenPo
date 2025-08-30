
// saudacao.js

// Executa ao carregar a página
window.onload = function () {
    // Seleciona o elemento de áudio da saudação
    let audio = document.getElementById("heman-audio");

    // Remove limitação de tempo: o áudio será reproduzido completo

    // Tenta reproduzir o áudio automaticamente ao carregar
    // Se o navegador bloquear o autoplay, adiciona evento para tocar ao clicar no botão
    audio.play().catch(() => {
        document.querySelector("#saudacao button").addEventListener("click", () => {
            audio.play(); // Toca o áudio ao clicar no botão
        });
    });
};

// Função chamada ao clicar no botão da saudação
function fecharSaudacao() {
    // Esconde o bloco de saudação
    document.getElementById("saudacao").style.display = "none";

    // Reinicia e toca o áudio da saudação
    var audio = document.getElementById("heman-audio");
    if (audio) {
        audio.currentTime = 0; // Começa do início
        audio.play(); // Toca o áudio
    }
}
