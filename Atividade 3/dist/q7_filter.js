"use strict";
// 7. Dado método filter dos arrays, crie uma implementação usando arrow function que
// filtre todos os elementos pares do array abaixo:
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
Object.defineProperty(exports, "__esModule", { value: true });
let array_ = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let result = array_.filter((num) => { return num % 2 == 0; });
console.log(result);
