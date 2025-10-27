"use strict";
// c) Associar um cliente a uma conta
// • Método: associarContaCliente(numeroConta: string, cpfCliente:
// string): void
// • Procure o cliente e a conta com os dados fornecidos e associe-os,
// respeitando considernado que o cliente não pode ter a mesma conta
// adicionada mais de uma vez.
// d) Listar contas de um cliente
// • Método: listarContasCliente(cpf: string): Conta[]
// • Retorne todas as contas associadas ao cliente cujo CPF foi
// informado.
// e) Totalizar saldo por cliente
// • Método: totalizarSaldoCliente(cpf: string): number
// • Calcule e retorne o saldo total de todas as contas de um cliente.
// f) Incluir um cliente
// • Método: inserirCliente(cliente: Cliente): void
// • Adicione o cliente ao array de clientes, respeitando as seguintes
// regras:
// • Não permitir que um cliente com o mesmo id ou cpf seja cadastrado
// mais de uma vez.
Object.defineProperty(exports, "__esModule", { value: true });
// g) Alterar o método de incluir uma conta
// • Método: inserirConta(conta: Conta): void
// • Adicione a conta ao array de contas, não permitindo que uma conta
// com o mesmo id ou numero seja criada.
class Banco {
    clientes = [];
    contas = [];
    inserirCliente(cliente) {
        this.clientes.push(cliente);
    }
    consultarCliente(cpf) {
        let clienteProcurado;
        for (let cliente of this.clientes) {
            if (cliente.cpf == cpf) {
                clienteProcurado = cliente;
                break;
            }
        }
        return clienteProcurado;
    }
    associarContaCliente() {
    }
}
class Conta {
    id;
    cliente;
    numero;
    dataAbertura;
    constructor(id, cliente, dataAbertura, numero) {
        this.id = id;
        this.cliente = cliente;
        this.numero = numero;
        this.dataAbertura = dataAbertura;
    }
}
class Cliente {
    id;
    nome;
    cpf;
    dataNascimento;
    contas;
    constructor(id, nome, cpf, dataNascimento) {
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
        this.contas = [];
    }
}
