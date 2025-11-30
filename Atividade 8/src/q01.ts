class Veiculo{
    _placa: string;
    _ano: number;

    constructor(placa: string, ano: number){
        this._placa = placa;
        this._ano = ano;
    }
}

class Carro extends Veiculo {
    _modelo: string;


    constructor(placa: string, ano: number, modelo: string){
        super(placa, ano)
        this._modelo = modelo
    }
}

class CarroEletrico extends Carro{
    _autonomiaBateria: number;

    constructor(placa: string, ano: number, modelo: string, autonomiaBateria: number){
        super(placa, ano, modelo);
        this._autonomiaBateria = autonomiaBateria;
    }
}