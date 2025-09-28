// 9. Crie uma função que receba um array de nomes e retorne aleatoriamente um
// deles usando Math.random() e Math.floor().
// Exemplo: ["Ana", "Bruno", "Carlos"] → "Bruno".
// Pensando em classes e objetos.
// Para os exemplos abaixo crie as classes, instancie objetos e realize testes exibindo os
// resultados.



class Random {
    names : string[];

    constructor(namesrandom: string[]){
        this.names = namesrandom;
    }

    randomName(): string{
    let max: number = this.names.length;
    let randomNum: number = Math.floor(Math.random() * max);
        
    return this.names[randomNum]!;

    }
    
}

let members = ["Taylor Swift", "Patixa Teló", "Xandão", "Luana Piovani", "Davi Brito"];

let randomMembers = new Random(members);

let firstrandom = randomMembers.randomName();
console.log(firstrandom);

let secondrandom = randomMembers.randomName();
console.log(secondrandom);

