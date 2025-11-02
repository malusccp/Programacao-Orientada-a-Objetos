"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const banco_1 = require("./banco");
let input = (0, prompt_sync_1.default)();
let b = new banco_1.Banco();
b.carregarDados();
let opcao = '';
do {
    console.log('\n--- BEM-VINDO AO BANCO DOM QUIXOTE ---');
    console.log('Escolha uma opção:');
    console.log('\n-- CONTAS --');
    console.log('01 - Inserir Conta      02 - Consultar Conta');
    console.log('03 - Sacar              04 - Depositar');
    console.log('05 - Excluir Conta      06 - Transferir');
    console.log('07 - Mudar Titularidade 08 - Transferência em Lote (Ordem)');
    console.log('\n-- RELATÓRIOS DO BANCO --');
    console.log('10 - Qtd. Contas        11 - Total Depositado');
    console.log('12 - Média Saldo Contas 13 - Listar Contas Sem Cliente');
    console.log('\n-- CLIENTES --');
    console.log('20 - Inserir Cliente    21 - Consultar Cliente');
    console.log('22 - Associar Conta     23 - Excluir Cliente');
    console.log('24 - Listar Contas      25 - Saldo Total do Cliente');
    console.log('\n-- SAIR --');
    console.log('0 - Sair');
    opcao = input("\n> Opção: ");
    switch (opcao) {
        case "01":
            inserirConta();
            break;
        case "02":
            consultarConta();
            break;
        case "03":
            sacar();
            break;
        case "04":
            depositar();
            break;
        case "05":
            excluirConta();
            break;
        case "06":
            transferir();
            break;
        case "07":
            mudarTitularidade();
            break;
        case "08":
            transferirParaMuitas();
            break;
        case "10":
            obterQuantidadeContas();
            break;
        case "11":
            obterTotalDepositado();
            break;
        case "12":
            obterMediaSaldo();
            break;
        case "13":
            listarContasSemCliente();
            break;
        case "20":
            inserirCliente();
            break;
        case "21":
            consultarCliente();
            break;
        case "22":
            associarContaCliente();
            break;
        case "23":
            excluirCliente();
            break;
        case "24":
            listarContasClientes();
            break;
        case "25":
            totalizarSaldoCliente();
            break;
        case "0":
            console.log("Aplicação encerrada.");
            break;
        default:
            console.log("\nOpção inválida. Tente novamente.");
    }
    if (opcao != "0") {
        input("\n...Operação finalizada. Pressione <enter> para continuar.");
    }
} while (opcao != "0");
function inserirConta() {
    console.log("\n--- Cadastrar Conta ---");
    let idStr = input('Digite o ID (numérico) da conta: ');
    let numero = input('Digite o número (ex: 123-A): ');
    let saldoStr = input('Digite o saldo inicial: ');
    let conta = new banco_1.Conta(parseInt(idStr), undefined, new Date(), numero, parseFloat(saldoStr));
    b.inserirConta(conta);
    console.log(`\nConta ${numero} inserida com sucesso!`);
}
function consultarConta() {
    console.log("\n--- Consultar Conta ---");
    let numero = input('Digite o número da conta: ');
    let conta = b.consultarPorNumero(numero);
    if (conta) {
        console.log(`\nConta encontrada:`);
        console.log(`- Número: ${conta.numero}`);
        console.log(`- Saldo: R$ ${conta.saldo.toFixed(2)}`);
        if (conta.cliente) {
            console.log(`- Titular: ${conta.cliente.nome} (CPF: ${conta.cliente.cpf})`);
        }
        else {
            console.log(`- Titular: (Conta sem titular)`);
        }
    }
    else {
        console.log("\nConta não encontrada.");
    }
}
function sacar() {
    console.log("\n--- Sacar ---");
    let numero = input('Digite o número da conta: ');
    let valorStr = input('Digite o valor do saque: ');
    let conta = b.consultarPorNumero(numero);
    if (conta) {
        let saldoAntigo = conta.saldo;
        b.sacar(numero, parseFloat(valorStr));
        if (conta.saldo === saldoAntigo) {
            console.log("\nSaldo insuficiente. Saque não realizado.");
        }
        else {
            console.log(`\nSaque realizado. Novo saldo: R$ ${conta.saldo.toFixed(2)}`);
        }
    }
    else {
        console.log("\nConta não encontrada.");
    }
}
function depositar() {
    console.log("\n--- Depositar ---");
    let numero = input('Digite o número da conta: ');
    let valorStr = input('Digite o valor do depósito: ');
    b.depositar(numero, parseFloat(valorStr));
    let conta = b.consultarPorNumero(numero);
    if (conta) {
        console.log(`\nDepósito realizado. Novo saldo: R$ ${conta.saldo.toFixed(2)}`);
    }
    else {
        console.log("\nConta não encontrada.");
    }
}
function excluirConta() {
    console.log("\n--- Excluir Conta ---");
    let numero = input('Digite o número da conta a excluir: ');
    let conta = b.consultarPorNumero(numero);
    if (conta) {
        b.excluirConta(numero);
        console.log(`\nConta ${numero} excluída com sucesso.`);
    }
    else {
        console.log("\nConta não encontrada.");
    }
}
function transferir() {
    console.log("\n--- Transferir ---");
    let numOrigem = input('Digite a conta de ORIGEM: ');
    let numDestino = input('Digite a conta de DESTINO: ');
    let valorStr = input('Digite o valor: ');
    b.transferir(numOrigem, numDestino, parseFloat(valorStr));
    let contaO = b.consultarPorNumero(numOrigem);
    let contaD = b.consultarPorNumero(numDestino);
    if (contaO && contaD) {
        console.log(`\nTransferência realizada.`);
        console.log(`Saldo Origem (${contaO.numero}): R$ ${contaO.saldo.toFixed(2)}`);
        console.log(`Saldo Destino (${contaD.numero}): R$ ${contaD.saldo.toFixed(2)}`);
    }
    else {
        console.log("\nConta de origem ou destino não encontrada.");
    }
}
function mudarTitularidade() {
    console.log("\n--- Mudar Titularidade ---");
    let numeroConta = input('Digite o número da conta: ');
    let cpfNovoCliente = input('Digite o CPF do NOVO titular: ');
    let conta = b.consultarPorNumero(numeroConta);
    let cliente = b.consultarCliente(cpfNovoCliente);
    if (conta && cliente) {
        b.mudarTitularidade(numeroConta, cpfNovoCliente);
        console.log(`\nTitularidade da conta ${numeroConta} alterada para ${cliente.nome}.`);
    }
    else {
        console.log("\nConta ou Cliente não encontrado.");
    }
}
function transferirParaMuitas() {
    console.log("\n--- Transferência em Lote (Ordem) ---");
    let numOrigem = input('Digite a conta de ORIGEM: ');
    let valorStr = input('Digite o valor (fixo) para CADA transferência: ');
    let contasDestinoStr = input('Digite os números das contas de destino (separados por vírgula): ');
    let contasDestino = contasDestinoStr.split(',');
    b.transferirParaMuitas(numOrigem, contasDestino, parseFloat(valorStr));
    console.log("\nOperação de lote finalizada. Verifique o console para eventuais erros.");
}
function obterQuantidadeContas() {
    console.log(`\nO banco possui ${b.obterQuantidadeContas()} contas cadastradas.`);
}
function obterTotalDepositado() {
    let total = b.obterTotalDepositado();
    console.log(`\nO saldo total de todas as contas é: R$ ${total.toFixed(2)}`);
}
function obterMediaSaldo() {
    let media = b.obterMediaSaldo();
    console.log(`\nA média de saldo por conta é: R$ ${media.toFixed(2)}`);
}
function listarContasSemCliente() {
    console.log("\n--- Contas Sem Titular (Órfãs) ---");
    const contasOrfas = b.listarContasSemCliente();
    if (contasOrfas.length === 0) {
        console.log("Nenhuma conta sem titular encontrada.");
    }
    else {
        for (const conta of contasOrfas) {
            console.log(`- Conta ID: ${conta.id}, Número: ${conta.numero}, Saldo: R$ ${conta.saldo.toFixed(2)}`);
        }
        console.log("\nUse a opção '22 - Associar Conta' para atribuir um titular.");
    }
}
function inserirCliente() {
    console.log("\n--- Cadastrar Cliente ---");
    let idStr = input('Digite o ID (numérico) do cliente: ');
    let nome = input('Digite o nome: ');
    let cpf = input('Digite o CPF (ex: 123.456.789-00): ');
    let dataStr = input('Data de Nascimento (AAAA-MM-DD): ');
    let cliente = new banco_1.Cliente(parseInt(idStr), nome, cpf, new Date(dataStr));
    b.inserirCliente(cliente);
    console.log(`\nCliente ${nome} inserido com sucesso!`);
}
function consultarCliente() {
    console.log("\n--- Consultar Cliente ---");
    let cpf = input('Digite o CPF do cliente: ');
    let cliente = b.consultarCliente(cpf);
    if (cliente) {
        console.log(`\nCliente encontrado:`);
        console.log(`- Nome: ${cliente.nome}`);
        console.log(`- CPF: ${cliente.cpf}`);
        console.log(`- Nascimento: ${cliente.dataNascimento.toLocaleDateString()}`);
        console.log(`- Qtd. Contas: ${cliente.contas.length}`);
    }
    else {
        console.log("\nCliente não encontrado.");
    }
}
function associarContaCliente() {
    console.log("\n--- Associar Conta a Cliente ---");
    let numeroConta = input('Digite o número da conta: ');
    let cpfCliente = input('Digite o CPF do cliente: ');
    b.associarContaCliente(numeroConta, cpfCliente);
    let conta = b.consultarPorNumero(numeroConta);
    if (conta && conta.cliente) {
        console.log(`\nConta ${conta.numero} associada a ${conta.cliente.nome}.`);
    }
    else {
        console.log("\nErro na associação (Conta ou Cliente não encontrado).");
    }
}
function excluirCliente() {
    console.log("\n--- Excluir Cliente ---");
    let cpf = input('Digite o CPF do cliente a excluir: ');
    let cliente = b.consultarCliente(cpf);
    if (cliente) {
        b.excluirCliente(cpf);
        console.log(`\nCliente ${cliente.nome} excluído.`);
        console.log("Suas contas associadas (se houver) agora estão sem titular.");
    }
    else {
        console.log("\nCliente não encontrado.");
    }
}
function listarContasClientes() {
    console.log("\n--- Listar Contas do Cliente ---");
    let cpf = input('Digite o CPF do cliente: ');
    let cliente = b.consultarCliente(cpf);
    if (!cliente) {
        console.log("\nCliente não encontrado.");
        return;
    }
    let contas = b.listarContasClientes(cpf);
    if (contas.length === 0) {
        console.log(`\nCliente ${cliente.nome} não possui contas.`);
    }
    else {
        console.log(`\nContas de ${cliente.nome}:`);
        for (const conta of contas) {
            console.log(`- Número: ${conta.numero}, Saldo: R$ ${conta.saldo.toFixed(2)}`);
        }
    }
}
function totalizarSaldoCliente() {
    console.log("\n--- Saldo Total do Cliente ---");
    let cpf = input('Digite o CPF do cliente: ');
    let cliente = b.consultarCliente(cpf);
    if (cliente) {
        let total = b.totalizarSaldoCliente(cpf);
        console.log(`\nO saldo total de ${cliente.nome} (soma de todas as suas contas) é: R$ ${total.toFixed(2)}`);
    }
    else {
        console.log("\nCliente não encontrado.");
    }
}
