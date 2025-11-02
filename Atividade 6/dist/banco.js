"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banco = exports.Cliente = exports.Conta = void 0;
class Conta {
    id;
    cliente;
    numero;
    saldo;
    dataAbertura;
    constructor(id, cliente, dataAbertura, numero, saldo) {
        this.id = id;
        this.cliente = cliente;
        this.numero = numero;
        this.saldo = saldo;
        this.dataAbertura = dataAbertura;
    }
    depositar(valor) {
        this.saldo = this.saldo + valor;
    }
    sacar(valor) {
        if (this.saldo >= valor) {
            this.saldo = this.saldo - valor;
            return true;
        }
        return false;
    }
    transferir(contaDestino, valor) {
        if (this.sacar(valor)) {
            contaDestino.depositar(valor);
            return true;
        }
        return false;
    }
    consultarSaldo() {
        return this.saldo;
    }
}
exports.Conta = Conta;
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
exports.Cliente = Cliente;
class Banco {
    clientes = [];
    contas = [];
    consultarPorNumero(numero) {
        return this.contas.find(conta => conta.numero == numero);
    }
    consultarCliente(cpf) {
        return this.clientes.find(cliente => cliente.cpf == cpf);
    }
    inserirCliente(novoCliente) {
        const duplicado = this.clientes.some(c => c.cpf === novoCliente.cpf || c.id === novoCliente.id);
        if (!duplicado) {
            this.clientes.push(novoCliente);
        }
        else {
            console.log("Erro: Cliente com este CPF ou ID já existe.");
        }
    }
    inserirConta(novaConta) {
        const duplicada = this.contas.some(c => c.numero === novaConta.numero || c.id === novaConta.id);
        if (!duplicada) {
            this.contas.push(novaConta);
        }
        else {
            console.log("Erro: Conta com este número ou ID já existe.");
        }
    }
    associarContaCliente(numeroConta, cpfCliente) {
        let clienteEncontrado = this.consultarCliente(cpfCliente);
        let contaEncontrada = this.consultarPorNumero(numeroConta);
        if (clienteEncontrado && contaEncontrada) {
            contaEncontrada.cliente = clienteEncontrado;
            if (!clienteEncontrado.contas.includes(contaEncontrada)) {
                clienteEncontrado.contas.push(contaEncontrada);
            }
        }
        else {
            console.log("Erro: Cliente ou conta não encontrados.");
        }
    }
    listarContasClientes(cpf) {
        let clienteEncontrado = this.consultarCliente(cpf);
        if (clienteEncontrado) {
            return clienteEncontrado.contas;
        }
        return [];
    }
    totalizarSaldoCliente(cpf) {
        let saldoTotal = 0;
        let contasCliente = this.listarContasClientes(cpf);
        for (let conta of contasCliente) {
            saldoTotal += conta.saldo;
        }
        return saldoTotal;
    }
    alterar(conta) {
        let contaProcurada = this.consultarPorNumero(conta.numero);
        if (contaProcurada) {
            contaProcurada.cliente = conta.cliente;
            contaProcurada.dataAbertura = conta.dataAbertura;
            contaProcurada.saldo = conta.saldo;
        }
    }
    depositar(numero, valor) {
        let conta = this.consultarPorNumero(numero);
        if (conta) {
            conta.depositar(valor);
        }
        else {
            console.log("Conta não encontrada.");
        }
    }
    sacar(numero, valor) {
        let conta = this.consultarPorNumero(numero);
        if (conta) {
            const sucesso = conta.sacar(valor);
            if (!sucesso) {
                console.log("Saldo insuficiente.");
            }
        }
        else {
            console.log("Conta não encontrada.");
        }
    }
    transferir(numeroOrigem, numeroDestino, valor) {
        let contaOrigem = this.consultarPorNumero(numeroOrigem);
        let contaDestino = this.consultarPorNumero(numeroDestino);
        if (contaOrigem && contaDestino) {
            const sucesso = contaOrigem.transferir(contaDestino, valor);
            if (!sucesso) {
                console.log("Transferência falhou: Saldo insuficiente na origem.");
            }
        }
        else {
            console.log("Erro: Conta de origem ou destino não encontrada.");
        }
    }
    transferirParaMuitas(numeroOrigem, numerosContasDestino, valorPorTransferencia) {
        let contaOrigem = this.consultarPorNumero(numeroOrigem);
        if (!contaOrigem) {
            console.log("Erro: Conta de origem não encontrada.");
            return;
        }
        const valorTotal = valorPorTransferencia * numerosContasDestino.length;
        if (contaOrigem.consultarSaldo() < valorTotal) {
            console.log("Erro: Saldo insuficiente para cobrir todas as transferências.");
            return;
        }
        for (const numeroDestino of numerosContasDestino) {
            let contaDestino = this.consultarPorNumero(numeroDestino);
            if (contaDestino) {
                this.transferir(numeroOrigem, numeroDestino, valorPorTransferencia);
            }
            else {
                console.log(`Aviso: Conta destino ${numeroDestino} não encontrada. Transferência pulada.`);
            }
        }
    }
    obterQuantidadeContas() {
        return this.contas.length;
    }
    obterTotalDepositado() {
        return this.contas.reduce((total, conta) => total + conta.saldo, 0);
    }
    obterMediaSaldo() {
        const totalContas = this.obterQuantidadeContas();
        const totalSaldo = this.obterTotalDepositado();
        if (totalContas === 0) {
            return 0;
        }
        return totalSaldo / totalContas;
    }
    mudarTitularidade(numeroConta, cpfNovoCliente) {
        let conta = this.consultarPorNumero(numeroConta);
        let novoCliente = this.consultarCliente(cpfNovoCliente);
        if (!conta || !novoCliente) {
            console.log("Erro: Conta ou novo cliente não encontrado.");
            return;
        }
        if (conta.cliente) {
            let clienteAntigo = conta.cliente;
            let indice = clienteAntigo.contas.indexOf(conta);
            if (indice > -1) {
                clienteAntigo.contas.splice(indice, 1);
            }
        }
        if (!novoCliente.contas.includes(conta)) {
            novoCliente.contas.push(conta);
        }
        conta.cliente = novoCliente;
    }
    excluirCliente(cpf) {
        let indiceCliente = this.clientes.findIndex(c => c.cpf === cpf);
        if (indiceCliente === -1) {
            console.log("Erro: Cliente não encontrado.");
            return;
        }
        let clienteParaExcluir = this.clientes[indiceCliente];
        for (const conta of clienteParaExcluir.contas) {
            conta.cliente = undefined;
        }
        this.clientes.splice(indiceCliente, 1);
    }
    excluirConta(numero) {
        let indiceConta = this.contas.findIndex(c => c.numero == numero);
        if (indiceConta > -1) {
            let contaParaExcluir = this.contas[indiceConta];
            if (contaParaExcluir.cliente) {
                let cliente = contaParaExcluir.cliente;
                let indiceNoCliente = cliente.contas.indexOf(contaParaExcluir);
                if (indiceNoCliente > -1) {
                    cliente.contas.splice(indiceNoCliente, 1);
                }
            }
            this.contas.splice(indiceConta, 1);
        }
        else {
            console.log("Erro: Conta não encontrada para exclusão.");
        }
    }
    listarContasSemCliente() {
        return this.contas.filter(conta => !conta.cliente);
    }
    carregarDados() {
        let c1 = new Cliente(1, "Raul Seixas", "111.111.111-11", new Date("1945-06-28"));
        let c2 = new Cliente(2, "Cazuza", "222.222.222-22", new Date("1958-04-04"));
        let c3 = new Cliente(3, "Jorge Ben Jor", "333.333.333-33", new Date("1939-03-22"));
        let c4 = new Cliente(4, "Djavan", "444.444.444-44", new Date("1949-01-27"));
        let c5 = new Cliente(5, "Roberto Carlos", "555.555.555-55", new Date("1941-04-19"));
        this.inserirCliente(c1);
        this.inserirCliente(c2);
        this.inserirCliente(c3);
        this.inserirCliente(c4);
        this.inserirCliente(c5);
        let acc1 = new Conta(1, undefined, new Date(), "001-R", 1000);
        let acc2 = new Conta(2, undefined, new Date(), "002-C", 500);
        let acc3 = new Conta(3, undefined, new Date(), "003-RS", 3000);
        let acc4 = new Conta(4, undefined, new Date(), "004-D", 1500);
        let acc5 = new Conta(5, undefined, new Date(), "005-RC", 200);
        this.inserirConta(acc1);
        this.inserirConta(acc2);
        this.inserirConta(acc3);
        this.inserirConta(acc4);
        this.inserirConta(acc5);
        this.associarContaCliente("001-R", "111.111.111-11");
        this.associarContaCliente("002-C", "222.222.222-22");
        this.associarContaCliente("003-RS", "111.111.111-11");
        this.associarContaCliente("004-D", "444.444.444-44");
    }
}
exports.Banco = Banco;
