"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
const operacao_1 = require("./operacao");
class Conta {
    _id;
    _numero;
    _saldo;
    _cliente;
    _dataDeAbertura;
    _operacoes;
    _limite;
    _idOperacaoAtual;
    constructor(numero, saldo, limite) {
        this._id = 0;
        this._numero = numero;
        this._saldo = saldo;
        this._dataDeAbertura = new Date();
        this._operacoes = [];
        this._limite = limite;
        this._idOperacaoAtual = 1;
    }
    sacar(valor) {
        let saldoApos;
        saldoApos = this._saldo - valor;
        if (saldoApos >= -this._limite) {
            this._saldo = this._saldo - valor;
            let operacao = new operacao_1.Operacao(this._idOperacaoAtual, this, "DÉBITO", valor, `Saque na conta ${this._numero}`, new Date());
            this._operacoes.unshift(operacao);
            this._idOperacaoAtual++;
            return operacao;
        }
        else {
            let operacao = new operacao_1.Operacao(this._idOperacaoAtual, this, "FALHA", valor, `Saque não autorizado: limite de saldo excedido`, new Date());
            this._idOperacaoAtual++;
            this._operacoes.unshift(operacao);
            return operacao;
        }
    }
    depositar(valor) {
        this._saldo = this._saldo + valor;
        let operacao = new operacao_1.Operacao(this._idOperacaoAtual, this, "CRÉDITO", valor, `Depósito na conta ${this._numero}`, new Date());
        this._operacoes.unshift(operacao);
        return operacao;
    }
    get saldo() {
        return this._saldo;
    }
    transferir(contaDestino, valor) {
        let saque = this.sacar(valor);
        if (saque.tipo === "FALHA") {
            saque.descricao = `Saque não autorizado: limite de saldo excedido`;
            return [saque];
        }
        saque.descricao = `Transferência para conta ${contaDestino.numero}`;
        let deposito = contaDestino.depositar(valor);
        deposito.descricao = `Transferência recebida da conta ${this.numero}`;
        return [saque, deposito];
    }
    get numero() {
        return this._numero;
    }
    set id(umId) {
        this._id = umId;
    }
    get cliente() {
        return this._cliente;
    }
    get operacoes() {
        return this._operacoes;
    }
    set cliente(umCliente) {
        if (umCliente) {
            this._cliente = umCliente;
        }
    }
}
exports.Conta = Conta;
