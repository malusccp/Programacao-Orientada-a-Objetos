"use strict";
// 11. Os tipos de dados em TypeScript podem ter métodos auxiliaries. Faça o que se
// pede abaixo:
Object.defineProperty(exports, "__esModule", { value: true });
// Não vamos esquecer de pensar em objetos. Nas próximas questões,
// relembre a declaração de classes e instanciação de objetos e faça o que se pede.
// a. Crie uma variável mensagem do tipo string e
// i. Inicialize-a com o valor "TypeScript É MUITO LEGAL!";
// ii. Exiba a mensagem toda em minúsculas.
// https://www.tutorialspoint.com/typescript/typescript_string_touppe
// rcase.htm
// iii. Exiba a quantidade de caracteres da string.
// https://www.tutorialspoint.com/typescript/typescript_string_length.
// htm
let mensagem = "TypeScript É MUITO LEGAL!";
console.log(mensagem.toLowerCase());
console.log("Length " + mensagem.length);
// b. Crie uma variável do tipo number chamada pi como um número
// inicialize-a com o valor 3.1415. Exiba apenas 2 casas decimais.
// https://www.geeksforgeeks.org/typescript/typescript-tofixed-function/
let pi = 3.1415;
console.log(pi.toFixed(2));
