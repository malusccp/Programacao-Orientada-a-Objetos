"use strict";
// 7. Considerando o exemplo da classe Retangulo dos slides, implemente um método
// adicional chamado que calcule o perímetro do retângulo. Teste os métodos do
// retângulo.
Object.defineProperty(exports, "__esModule", { value: true });
class Retangulo {
    l1 = 0;
    l2 = 0;
    calcularPerimetro() {
        return this.l1 + this.l2;
    }
}
let retangulo;
retangulo = new Retangulo();
retangulo.l1 = 10;
retangulo.l2 = 20;
console.log(retangulo.calcularPerimetro());
