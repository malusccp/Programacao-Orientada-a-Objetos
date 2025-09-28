// 13. Crie uma classe chamada TradutorEmojis que possua um atributo chamado
// dicionario, armazenando palavras-chave e seus respectivos emojis, conforme o
// exemplo abaixo:
// class TradutorEmojis { dicionario: { [palavra: string]: string } = {
//  "amor": " ",
//  "futebol": " ",
//  "cachorro": " ",
//  //....
//  };
// Crie um método chamado traduzir que receba uma frase e retorne a frase usando
// emojis quando houver correspondência. Pesquise os métodos split, map e join para
// fazer o que se pede.
// Exemplo: “O amor do brasileiro é o futebol” → “O do brasileiro é o ”,

class TranslateEmojis {
    dictionary: { [word: string]: string }

    constructor(){
        this.dictionary = {
            "amor": "❤️",
            "futebol": "⚽",
            "cachorro": "🐶" };
    }

    translate(frase: string){

        let wordSplit: string[] = frase.split(" ");

        let Translating = wordSplit.map(word => {return this.dictionary[word] || word });

        let phraseTranslate = Translating.join(" ");

        return phraseTranslate
    }

}

let phrase = new TranslateEmojis()

console.log(phrase.translate("O amor do brasileiro é o futebol"))