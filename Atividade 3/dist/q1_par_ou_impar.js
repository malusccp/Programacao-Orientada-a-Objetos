"use strict";
// 1. Crie uma função que recebe como parâmetro um número e retorna true se o
// número for par e false se for ímpar.
Object.defineProperty(exports, "__esModule", { value: true });
function parOuimpar(numero) {
    return numero % 2 === 0;
}
let num1 = 93;
console.log(`O número ${num1} é par?`, parOuimpar(num1));
