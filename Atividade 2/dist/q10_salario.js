"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 10. Declare variáveis chamadas nome, salario e linguagem. Inicialize-as com os
// valores “Ely”, 2.000 e TypeScript. Gere uma a saída abaixo, mantendo a quebra de
// linhas usando template strings:
// Ely
// My payment time is 2000.00
// and
// my preffered language is TypeScript
let nome = "Ely";
let salario = 2000;
let linguagem = "TypeScript";
let saida = `${nome}
My payment time is ${salario.toFixed(2)}
and
my preffered language is TypeScript`;
console.log(saida);
