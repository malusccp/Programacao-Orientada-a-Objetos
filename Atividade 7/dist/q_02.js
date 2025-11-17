"use strict";
// 2. Crie uma classe Hora que tenha:
// a. Três atributos privados e definidos no construtor chamados hora, minutos e
// segundos;
// b. Métodos públicos para ler hora, minuto e segundo de forma individual;
// c. Um método público para retorne a hora no formato “hh:mm:ss”.
Object.defineProperty(exports, "__esModule", { value: true });
class Hora {
    hora;
    minuto;
    segundo;
    constructor(hora, minuto, segundo) {
        this.hora = hora;
        this.minuto = minuto;
        this.segundo = segundo;
    }
    get horas() {
        return this.hora;
    }
    get minutos() {
        return this.minuto;
    }
    get segundos() {
        return this.segundo;
    }
    exibirHora() {
        let horasStr = String(this.horas).padStart(2, '0');
        let minutosStr = String(this.minutos).padStart(2, '0');
        let segundosStr = String(this.segundos).padStart(2, '0');
        return `${horasStr}h:${minutosStr}m:${segundosStr}s`;
    }
}
let hora = new Hora(15, 2, 5);
console.log(hora.exibirHora());
