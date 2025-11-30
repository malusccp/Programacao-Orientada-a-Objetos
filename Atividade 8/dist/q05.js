// Implemente os métodos calcularSalario() de cada classe da seguinte forma:
// a. Empregado: apenas retorna o valor do atributo salário;
// b. Diarista: sobrescreve calcularSalario, chamando o método homônimo de Empregado e dividindo o resultado por 30;
// c. Horista: sobrescreve calcularSalario, chamando o método homônimo de Diarista e dividindo o resultado por 24.
class Empregado {
    salario = 500;
    calcularSalario() {
        return this.salario;
    }
}
class Diarista extends Empregado {
    calcularSalario() {
        return super.calcularSalario() / 30;
    }
}
class Horista extends Diarista {
    calcularSalario() {
        return super.calcularSalario() / 24;
    }
}
let empregado = new Empregado();
let diarista = new Diarista();
let horista = new Horista();
console.log("Salário empregado: " + empregado.calcularSalario());
console.log("Salário diarista: " + diarista.calcularSalario());
console.log("Salário horalista: " + horista.calcularSalario());
export {};
