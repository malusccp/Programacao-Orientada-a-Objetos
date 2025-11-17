// 2. Crie uma classe Hora que tenha:
// a. Três atributos privados e definidos no construtor chamados hora, minutos e
// segundos;
// b. Métodos públicos para ler hora, minuto e segundo de forma individual;
// c. Um método público para retorne a hora no formato “hh:mm:ss”.

class Hora {
    private hora : number; 
    private minuto : number;
    private segundo: number;

    constructor(hora: number, minuto: number, segundo: number){
        this.hora = hora;
        this.minuto = minuto;
        this.segundo = segundo;
    }

    get horas(): number{
        return this.hora;
    }

    get minutos(): number{
        return this.minuto
    }

    get segundos(): number{
        return this.segundo
    }

    exibirHora(){
        let horasStr = String(this.horas).padStart(2, '0');
        let minutosStr = String(this.minutos).padStart(2, '0');
        let segundosStr = String(this.segundos).padStart(2, '0');
        return `${horasStr}h:${minutosStr}m:${segundosStr}s`;
    }
}
let hora: Hora = new Hora(15, 2, 5);
console.log(hora.exibirHora());