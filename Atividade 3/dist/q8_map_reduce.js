"use strict";
// 8. Crie um exemplo usando a função map para dobrar os elementos de um array e
// reduce para totalizar a soma dos elementos do array.
Object.defineProperty(exports, "__esModule", { value: true });
let array = [1, 2, 4, 7, 89];
let arrayDouble = array.map((num) => num * 2);
let startValue = 0;
let arraySum = array.reduce((accumulator, currentValue) => accumulator + currentValue, startValue);
console.log(arrayDouble);
console.log(arraySum);
