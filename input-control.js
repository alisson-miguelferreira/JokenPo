
// Seleciona o textarea de resultado pelo ID
const resultadoInput = document.getElementById('resultado-input');


// Sempre que o usuário digitar (input), ajusta a altura do textarea
resultadoInput.addEventListener('input', () => {
    // Reseta a altura para calcular corretamente
    resultadoInput.style.height = 'auto';
    // Define a altura conforme o conteúdo
    // 'px' significa pixels, unidade de medida usada para definir a altura do textarea de acordo com o conteúdo.
    resultadoInput.style.height = resultadoInput.scrollHeight + 'px';
});


// Ao carregar a página, ajusta a altura inicial do textarea
window.addEventListener('load', () => {
    resultadoInput.style.height = 'auto';
    resultadoInput.style.height = resultadoInput.scrollHeight + 'px';
});