const resultGame = document.querySelector('.result')
const yourScore = document.querySelector('#your-score')
const machineScore = document.querySelector('#machine-score')

let yourScoreNumber = 0
let machineScoreNumber = 0

//ENUM - Técnica de criar um objeto para armazenar valores que são replicados diversas vezes durante o código, facilitando caso haja alguma alteração nos valores armazenados nesse objeto.
const GAME_OPTIONS = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors'
}

const humanPlay = (humanChoice) =>{
    gamePlay(humanChoice, machinePlay())
}

const machinePlay = () =>{
    const choices = [GAME_OPTIONS.ROCK,GAME_OPTIONS.PAPER,GAME_OPTIONS.SCISSORS]
    let machineChoice = Math.floor(Math.random() * 3)
    return choices[machineChoice]
}

const gamePlay = (human, machine) =>{
    console.log('Humano: ' + human + ' Máquina: ' + machine)
    if(human === machine){
        resultGame.innerHTML = 'Deu empate'
    } else if(
    (human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK) || 
    (human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS) || 
    (human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER)){
        yourScoreNumber++
        yourScore.innerHTML = yourScoreNumber
        resultGame.innerHTML = 'Você ganhou'
    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        resultGame.innerHTML = 'Você perdeu'
    }
}