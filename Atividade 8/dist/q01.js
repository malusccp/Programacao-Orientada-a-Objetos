class Veiculo {
    _placa;
    _ano;
    constructor(placa, ano) {
        this._placa = placa;
        this._ano = ano;
    }
}
class Carro extends Veiculo {
    _modelo;
    constructor(placa, ano, modelo) {
        super(placa, ano);
        this._modelo = modelo;
    }
}
class CarroEletrico extends Carro {
    _autonomiaBateria;
    constructor(placa, ano, modelo, autonomiaBateria) {
        super(placa, ano, modelo);
        this._autonomiaBateria = autonomiaBateria;
    }
}
export {};
