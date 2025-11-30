// 2. Crie uma classe Calculadora com:
// a. Dois tributos privados chamados representando dois operandos;
// b. Crie um construtor que inicializa os atributos;
// c. Crie um método que retorna a soma dos dois atributos;
// d. Teste a classe.

class Calculadora{
    private _num1: number
    private _num2: number

    constructor(num1: number, num2: number){
        this._num1 = num1;
        this._num2 = num2;
    }

    get num1(): number{
        return this._num1;
    }

    get num2(): number{
        return this._num2; 
    }

    somar(): number{
        return this._num1 + this._num2
    }
}

let calculo1: Calculadora = new Calculadora(2,3)
console.log(calculo1.somar())

export{Calculadora}