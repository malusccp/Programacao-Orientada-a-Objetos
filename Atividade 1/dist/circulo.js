"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 8. Crie uma classe Circulo que possua um atributo raio. Crie dois métodos que
// calculam a área e o perímetro. Instancie um objeto dessa classe, atribua um valor
// ao raio e exiba a área e o perímetro chamando os dois métodos definidos.
class Circle {
    pi = 3.14;
    raio = 0;
    calcularArea() {
        return (this.raio * this.raio) * this.pi;
    }
    calcularPerimetro() {
        return 2 * this.pi * this.raio;
    }
}
let circle;
circle = new Circle();
circle.raio = 6;
console.log(circle.calcularArea());
