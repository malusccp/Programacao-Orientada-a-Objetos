// 3. Crie uma classe chamada CalculadoraCientifica que herda da classe Calculadora
// do exercício passado e:
// a. Implemente um método chamado exponenciar que retorne o primeiro
// operando elevado ao segundo;
// b. Teste a classe;

// c. Foi necessária alguma modificação em Calculadora para o acesso aos
// atributos?

import { Calculadora } from "./q02.js";

class CalculadoraCientifica extends Calculadora{
    
    constructor(num1: number, num2: number){
        super(num1, num2);
    }


    exponenciar(): number{
        return this.num2 ** this.num1
    }
}

let calculo2: CalculadoraCientifica = new CalculadoraCientifica(5,2)

console.log(calculo2.exponenciar())