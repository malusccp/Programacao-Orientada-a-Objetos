"use strict";
// 13. Crie uma classe Produto com:
// a. Atributos nome e preco;
// b. Um método aplicarDesconto(percentual: number) que retorna o preço
// com desconto aplicado;
// c. Um método chamado emitirOrcamento() que chama o método acima e
// retorna uma string como:
// Produto: Camisa, Preço: R$ 100.00
// Desconto: 10% → Novo preço: R$ 90.00
// d. Desafio: pesquisar como exibir os números com decimais usando vírgula
// com o método toLocaleString e estilo moeda em real.
// Instancie uma classe, atribua valores aos atributos e imprima o resultado do
// método emitirOrcamento().
Object.defineProperty(exports, "__esModule", { value: true });
class Produto {
    nome;
    preco;
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    aplicarDesconto(percentual) {
        let desconto = this.preco * (percentual / 100);
        return this.preco - desconto;
    }
    emitirOrcamento(percentualDeDesconto) {
        let novoPreco = this.aplicarDesconto(percentualDeDesconto);
        let saida = `Produto: ${this.nome}, Preço: R$${this.preco.toFixed(2)}
        Desconto: ${percentualDeDesconto}% -> Novo preço: ${novoPreco.toFixed(2)}`;
        return saida;
    }
}
let sapato = new Produto("Sapato", 100);
console.log(sapato.emitirOrcamento(50));
