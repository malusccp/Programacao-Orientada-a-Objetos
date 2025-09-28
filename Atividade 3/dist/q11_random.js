"use strict";
// 11. Crie agora uma classe chamada Sorteio e crie:
// a. Um atributo que é um array de strings inicializado com [ ].
// b. Crie um método chamado adicionar que recebe um nome como parâmetro
// e o adiciona no array;
// c. Crie um método chamado sortear que retorna aleatoriamente um dos
// nomes do array.
Object.defineProperty(exports, "__esModule", { value: true });
class Random {
    array;
    constructor(array) {
        this.array = array;
    }
    add(name) {
        this.array.push(name);
    }
    sortName() {
        let randomNum = Math.floor(Math.random() * this.array.length);
        return this.array[randomNum];
    }
}
let members = ["Taylor Swift", "Patixa Teló", "Xandão", "Luana Piovani", "Davi Brito"];
let randomName = new Random(members);
randomName.add("MysticIza");
let firstRandom = randomName.sortName();
console.log(firstRandom);
