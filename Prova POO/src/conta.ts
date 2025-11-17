import { Cliente } from "./cliente";
import { Operacao } from "./operacao";

export class Conta {
    private _id: number;
    private _numero: string;
    private _saldo: number;
    private _cliente!: Cliente;
    private _dataDeAbertura: Date;
    private _operacoes: Operacao[]
    private _limite: number;
    private _idOperacaoAtual: number;


    constructor(numero: string, saldo: number, limite: number) {
        this._id = 0;
        this._numero = numero;
        this._saldo = saldo;
        this._dataDeAbertura = new Date();
        this._operacoes = [];
        this._limite = limite;
        this._idOperacaoAtual = 1;

    }

    sacar(valor: number): Operacao {
        let saldoApos: number;
        saldoApos = this._saldo - valor 
        if (saldoApos >= -this._limite) {
            this._saldo = this._saldo - valor;
            let operacao = new Operacao(this._idOperacaoAtual, this, "DÉBITO", valor, `Saque na conta ${this._numero}`, new Date())
            this._operacoes.unshift(operacao)
            this._idOperacaoAtual++;
            return operacao
        }
        else{
        let operacao = new Operacao(this._idOperacaoAtual, this, "FALHA", valor, `Saque não autorizado: limite de saldo excedido`, new Date())
        this._idOperacaoAtual++;
        this._operacoes.unshift(operacao)
        return operacao

        }

    }

    depositar(valor: number): Operacao {
        this._saldo = this._saldo + valor;
        let operacao = new Operacao(this._idOperacaoAtual, this, "CRÉDITO", valor, `Depósito na conta ${this._numero}`, new Date())
        this._operacoes.unshift(operacao)
        return operacao
    }

    get saldo(): number {
        return this._saldo
    }

transferir(contaDestino: Conta, valor: number): Operacao[] {
        let saque = this.sacar(valor);
        if (saque.tipo === "FALHA") {
            saque.descricao =`Saque não autorizado: limite de saldo excedido`;
            return [saque];
        }
        saque.descricao = `Transferência para conta ${contaDestino.numero}`;
        let deposito = contaDestino.depositar(valor);
        deposito.descricao = `Transferência recebida da conta ${this.numero}`;
        return [saque, deposito] ;
    }

    get numero(): string {
        return this._numero;
    }

    set id(umId: number) {
        this._id = umId;
    }

    get cliente(): Cliente {
        return this._cliente;
    }

    get operacoes(): Operacao[] {
        return this._operacoes;
    }

    set cliente(umCliente: Cliente) {
        if (umCliente) {
            this._cliente = umCliente;
        }
    }
}