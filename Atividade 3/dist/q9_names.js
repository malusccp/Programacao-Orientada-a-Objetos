"use strict";
// 9. Crie uma função que receba um array de nomes e retorne aleatoriamente um
// deles usando Math.random() e Math.floor().
// Exemplo: ["Ana", "Bruno", "Carlos"] → "Bruno".
// Pensando em classes e objetos.
// Para os exemplos abaixo crie as classes, instancie objetos e realize testes exibindo os
// resultados.
Object.defineProperty(exports, "__esModule", { value: true });
class Random {
    names;
    constructor(namesrandom) {
        this.names = namesrandom;
    }
    randomName() {
        let max = this.names.length;
        let randomNum = Math.floor(Math.random() * max);
        return this.names[randomNum];
    }
}
let members = ["Taylor Swift", "Patixa Teló", "Xandão", "Luana Piovani", "Davi Brito"];
let randomMembers = new Random(members);
let firstrandom = randomMembers.randomName();
console.log(firstrandom);
let secondrandom = randomMembers.randomName();
console.log(secondrandom);
