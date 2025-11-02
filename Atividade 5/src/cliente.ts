
class Banco {
    clientes: Cliente[] = [];

    contas: Conta[] = [];

    inserirCliente(novoCliente: Cliente):void{

        let duplicado: boolean = false;

        for (let cliente of this.clientes){
            if(cliente.cpf == novoCliente.cpf || cliente.id == novoCliente.id){
                duplicado = true;
                break
            }
        }
        if(duplicado == false){
            this.clientes.push(novoCliente)
        }
    
        
    }

    inserirConta(novaConta: Conta): void{
                let duplicada: boolean = false;

        for (let conta of this.contas){
            if(conta.numero == novaConta.numero || conta.id == novaConta.id){
                duplicada = true;
                break
            }
        }
        if(duplicada == false){
            this.contas.push(novaConta)
        }
    

    }
    
    consultarCliente(cpf: string): Cliente {
        let clienteProcurado!: Cliente;
        for (let cliente of this.clientes){
            if(cliente.cpf == cpf){
                clienteProcurado = cliente;
                break
            }
        }
        return clienteProcurado;
    }
    associarContaCliente(numeroConta: string, cpfCliente: string): void{
        let clienteEncontrado = this.consultarCliente(cpfCliente);

        let contaEncontrada!: Conta;

        for (let conta of this.contas){
            if(conta.numero == numeroConta){
                let contaEncontrada = conta;
                break;
            }

        }
        if(clienteEncontrado && contaEncontrada){

            if(!clienteEncontrado.contas.includes(contaEncontrada)){
                contaEncontrada.cliente = clienteEncontrado;
                clienteEncontrado.contas.push(contaEncontrada);
            }


        }
    }

    listarContasClientes(cpf: string):Conta[]{
        let clienteEncontrado = this.consultarCliente(cpf);
        let contaEncontrada = clienteEncontrado.contas;
        return contaEncontrada;

    }

    totalizarSaldoCliente(cpf: string): number{
        let saldoTotal: number = 0;
        let contasCliente = this.listarContasClientes(cpf)

        for (let conta of contasCliente){
            saldoTotal += conta.saldo
        }

        return saldoTotal
    }
    
    }

class Conta{
    id: number;
    cliente: Cliente;
    numero: string;
    saldo: number;
    dataAbertura: Date;

    constructor(id: number, cliente: Cliente, dataAbertura: Date, numero: string, saldo: number){
        this.id = id;
        this.cliente = cliente;
        this.numero = numero;
        this.saldo = saldo;
        this.dataAbertura = dataAbertura;
    }

}

class Cliente{
    id: number;
    nome: string;
    cpf: string;
    dataNascimento: Date;
    contas: Conta[];


    constructor(id: number, nome: string, cpf: string, dataNascimento: Date){
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
        this.contas = []
    }
}