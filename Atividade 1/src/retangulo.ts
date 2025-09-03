// 7. Considerando o exemplo da classe Retangulo dos slides, implemente um método
// adicional chamado que calcule o perímetro do retângulo. Teste os métodos do
// retângulo.

class Retangulo {
    l1: number = 0;
    l2: number = 0;

    calcularPerimetro(){
        return this.l1 + this.l2
    }

}

let retangulo : Retangulo;
retangulo = new Retangulo();
retangulo.l1 = 10;
retangulo.l2 = 20;
console.log(retangulo.calcularPerimetro());