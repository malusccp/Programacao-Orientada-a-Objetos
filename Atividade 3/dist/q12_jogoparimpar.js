"use strict";
// 12. Crie uma classe chamado JogoParImpar com um atributo chamado
// numeroJogador e outro chamado numeroMaquina e os métodos:
// a. sortearMaquina():gera um número aleatório de 1 a 10 e atribui ao atributo
// numeroMaquina;
// b. resultado(): soma o número do jogador e da máquina e retorna se deu par
// ou ímpar;
// c. vencedor(): string: retorna “Jogador” ou “Máquina” de acordo com venceu
Object.defineProperty(exports, "__esModule", { value: true });
class EvenOrOddGame {
    playerNumber;
    machineNumber;
    constructor(playerNumber) {
        this.playerNumber = playerNumber;
        this.machineNumber = this.raffleMachine();
    }
    raffleMachine() {
        let randomNum = Math.floor(Math.random() * 11);
        return randomNum;
    }
    result() {
        let sum = this.machineNumber + this.playerNumber;
        if (sum % 2 == 0) {
            return "Par";
        }
        else
            return "Ímpar";
    }
    winner(playerChoice) {
        let finalResult = this.result();
        if (playerChoice == finalResult) {
            return "Player";
        }
        else
            return "Machine";
    }
}
let Game = new EvenOrOddGame(90);
let winnerGame = Game.winner("Par");
console.log(`O vencedor é ${winnerGame}`);
