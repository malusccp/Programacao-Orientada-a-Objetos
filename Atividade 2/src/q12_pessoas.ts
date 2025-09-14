// 12. Crie uma classe Pessoa com:
// a. atributos nome e idade;
// b. um método apresentar() que retorna uma string como:
// Meu nome é Ely e tenho 46 anos.

// Instancie uma classe, atribua valores aos atributos e imprima o resultado do
// método apresentar().

class Pessoa {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number){
        this.nome = nome
        this.idade = idade
    }
    apresentar(): string {
        return `Meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
}
 let ely = new Pessoa("Ely", 46);

 console.log(ely.apresentar());