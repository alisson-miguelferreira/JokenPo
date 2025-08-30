// Função para resetar o resultado e as pontuações
function resetGame() {
    heManScore = 0; // Zera pontuação do He-Man
    skeletorScore = 0; // Zera pontuação do Esqueleto
    heManScoreElement.innerHTML = heManScore; // Atualiza placar do He-Man
    skeletorScoreElement.innerHTML = skeletorScore; // Atualiza placar do Esqueleto
    document.getElementById('resultado-input').value = ''; // Limpa o resultado
    autoResizeResultado(); // Ajusta altura do textarea
}
// Seleciona os elementos do placar corretamente
const heManScoreElement = document.getElementById('pontuacao-heman'); // Elemento do placar do He-Man
const skeletorScoreElement = document.getElementById('pontuacao-skeletor'); // Elemento do placar do Esqueleto

// Variáveis para armazenar os pontos
let heManScore = 0; // Pontuação do He-Man
let skeletorScore = 0; // Pontuação do Esqueleto

// "ENUM" de opções do jogo: representa as escolhas possíveis
const GAME_OPTIONS = {
    papel: 'Papel',
    pedra: 'Pedra',
    tesoura: 'Tesoura'
};

const playHuman = (heManChoice) => { // Função chamada ao clicar em um botão
    playTheGame(heManChoice, playMachine()); // Executa o jogo passando a escolha do He-Man e do Esqueleto
}

const playMachine = () => { // Função para gerar jogada aleatória do Esqueleto
    const optionsArray = [GAME_OPTIONS.papel, GAME_OPTIONS.pedra, GAME_OPTIONS.tesoura]; // Array para sorteio
    const randomnumber = Math.floor(Math.random() * optionsArray.length); // Número aleatório entre 0 e 2
    return optionsArray[randomnumber]; // Retorna a escolha do Esqueleto
}

const playTheGame = (heMan, skeletor) => { // Função principal do jogo
    console.log('He-Man: ' + heMan); // Mostra escolha do He-Man no console
    console.log('Esqueleto: ' + skeletor); // Mostra escolha do Esqueleto no console

    if (heMan === skeletor) { // Se for empate
        document.getElementById('resultado-input').value = 'Um duelo equilibrado... por enquanto. ⚖️'; // Mensagem de empate
        autoResizeResultado(); // Ajusta altura do textarea
    }
    else if (
        (heMan === GAME_OPTIONS.pedra && skeletor === GAME_OPTIONS.tesoura) ||
        (heMan === GAME_OPTIONS.tesoura && skeletor === GAME_OPTIONS.papel) ||
        (heMan === GAME_OPTIONS.papel && skeletor === GAME_OPTIONS.pedra)
    ) {
        heManScore++;
        heManScoreElement.innerHTML = heManScore;
        document.getElementById('resultado-input').value = 'Pelos poderes de Grayskull, a justiça prevaleceu! ⚡'; // Mensagem de vitória do He-Man
        autoResizeResultado(); // Ajusta altura do textarea
    }
    else {
        skeletorScore++;
        skeletorScoreElement.innerHTML = skeletorScore;
        document.getElementById('resultado-input').value = 'Você perdeu, tolo! MUAHAHAHA! 💀'; // Mensagem de vitória do Esqueleto
        autoResizeResultado(); // Ajusta altura do textarea
    }
    // Função para auto-resize do textarea resultado
    function autoResizeResultado() {
        const resultadoInput = document.getElementById('resultado-input');
        resultadoInput.style.height = 'auto';
        resultadoInput.style.overflowY = 'hidden'; // Remove rolagem vertical
        // Adiciona padding extra para frases longas
        resultadoInput.style.paddingTop = '12px';
        resultadoInput.style.paddingBottom = '12px';
        resultadoInput.style.height = resultadoInput.scrollHeight + 'px';
        // Garante que o texto fique perfeitamente enquadrado
        resultadoInput.scrollTop = 0;
    }
}
