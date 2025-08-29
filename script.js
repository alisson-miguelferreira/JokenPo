// Seleciona os elementos do placar corretamente (sem #)
const yourScoreElement = document.getElementById('pontuacao-jogador'); // Elemento do placar do jogador
const machineScoreElement = document.getElementById('pontuacao-alexa'); // Elemento do placar da Alexa

// Variáveis para armazenar os pontos
let humanScore = 0; // Pontuação do jogador
let machineScore = 0; // Pontuação da Alexa

// "ENUM" de opções do jogo: representa as escolhas possíveis
const GAME_OPTIONS = {
    papel: 'Papel',
    pedra: 'Pedra',
    tesoura: 'Tesoura'
};

const playHuman = (humanChoice) => { // Função chamada ao clicar em um botão
    playTheGame(humanChoice, playMachine()); // Executa o jogo passando a escolha do humano e da máquina
}

const playMachine = () => { // Função para gerar jogada aleatória da Alexa
    const optionsArray = [GAME_OPTIONS.papel, GAME_OPTIONS.pedra, GAME_OPTIONS.tesoura]; // Array para sorteio
    const randomnumber = Math.floor(Math.random() * optionsArray.length); // Número aleatório entre 0 e 2
    return optionsArray[randomnumber]; // Retorna a escolha da Alexa
}

const playTheGame = (human, machine) => { // Função principal do jogo
    console.log('Jogador: ' + human); // Mostra escolha do jogador no console
    console.log('Máquina: ' + machine); // Mostra escolha da Alexa no console

    if (human === machine) { // Se for empate
        document.getElementById('resultado-input').value = 'Empate!'; // Mostra "Empate!" no input
    }
    else if ( // Se o jogador vencer
        (human === GAME_OPTIONS.pedra && machine === GAME_OPTIONS.tesoura) || // Pedra vence Tesoura
        (human === GAME_OPTIONS.tesoura && machine === GAME_OPTIONS.papel) || // Tesoura vence Papel
        (human === GAME_OPTIONS.papel && machine === GAME_OPTIONS.pedra) // Papel vence Pedra
    ) {
        humanScore++; // Incrementa pontuação do jogador
        yourScoreElement.innerHTML = humanScore; // Atualiza placar do jogador
        document.getElementById('resultado-input').value = 'Você venceu!'; // Mostra "Você venceu!" no input
    }
    else { // Se a Alexa vencer
        machineScore++; // Incrementa pontuação da Alexa
        machineScoreElement.innerHTML = machineScore; // Atualiza placar da Alexa
        document.getElementById('resultado-input').value = 'Você perdeu para a Alexa!'; // Mostra "Você perdeu para a Alexa!" no input
    }
}
