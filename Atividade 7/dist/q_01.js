"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Calculadora {
    _operando1;
    _operando2;
    constructor(operando1, operando2) {
        this._operando1 = operando1;
        this._operando2 = operando2;
    }
    get operando1() {
        return this._operando1;
    }
    get operando2() {
        return this._operando2;
    }
    somar() {
        return this._operando1 + this._operando2;
    }
    subtrair() {
        return this._operando1 - this._operando2;
    }
}
let calculadora = new Calculadora(2, 3);
console.log(calculadora.operando1);
console.log(calculadora.operando2);
console.log(calculadora.somar());
console.log(calculadora.subtrair());
