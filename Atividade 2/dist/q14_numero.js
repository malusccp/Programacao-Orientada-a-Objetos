"use strict";
// 14. Estude como funciona um “if” em TypeScript e o operador %. Crie uma classe
// Numero com:
// a. Um atributo valor;
// b. Um método que ehPar() que retorna verdadeiro ou falso dependendo do
// valor do atributo;
// c. Um método ehImpar() que retorna verdadeiro ou falso dependendo do
// valor do atributo.
// Instancie objetos Numero, inicialize o atributo valor e exiba os resultados dos
// métodos.
Object.defineProperty(exports, "__esModule", { value: true });
class Numero {
    valor;
    constructor(valor) {
        this.valor = valor;
    }
    ehPar() {
        return this.valor % 2 === 0;
    }
    ehImpar() {
        return this.valor % 2 !== 0;
    }
}
let numero1 = new Numero(4);
let numero2 = new Numero(19);
console.log(`\n--- Número ${numero1.valor} ---`);
console.log(`O número é par? ${numero1.ehPar()}`);
console.log(`O número é ímpar? ${numero1.ehImpar()}`);
console.log(`\n--- Número ${numero2.valor} ---`);
console.log(`O número é par? ${numero2.ehPar()}`);
console.log(`O número é ímpar? ${numero2.ehImpar()}`);
