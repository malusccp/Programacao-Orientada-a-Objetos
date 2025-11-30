// 2. Crie uma classe Calculadora com:
// a. Dois tributos privados chamados representando dois operandos;
// b. Crie um construtor que inicializa os atributos;
// c. Crie um método que retorna a soma dos dois atributos;
// d. Teste a classe.
class Calculadora {
    _num1;
    _num2;
    constructor(num1, num2) {
        this._num1 = num1;
        this._num2 = num2;
    }
    get num1() {
        return this._num1;
    }
    get num2() {
        return this._num2;
    }
    somar() {
        return this._num1 + this._num2;
    }
}
let calculo1 = new Calculadora(2, 3);
console.log(calculo1.somar());
export { Calculadora };
