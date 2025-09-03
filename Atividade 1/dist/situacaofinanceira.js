"use strict";
// 9. Crie uma classe chamada SituacaoFinanceira com os atributos valorCreditos e
// valorDebitos. Crie um método chamado calcularSaldo() que retorna/calcula a
// diferença entre crédito e débito. Instancie uma classe SituacaoFinanceira, inicialize
// os dois atributos e exiba o resultado do método calcularSaldo().
Object.defineProperty(exports, "__esModule", { value: true });
class SituacaoFinanceira {
    valorCreditos = 0;
    valorDebitos = 0;
    calcularSaldo() {
        return this.valorCreditos - this.valorDebitos;
    }
}
let situacaoFinanceira = new SituacaoFinanceira();
situacaoFinanceira.valorCreditos = 3000;
situacaoFinanceira.valorDebitos = 1500;
console.log(situacaoFinanceira.calcularSaldo());
