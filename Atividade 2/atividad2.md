1. Qual a diferença entre tipagem dinâmica e tipagem estática?  
Tipagem estática: Quando você declara uma variável, precisa informar o tipo, ou seja, se ela é int, float, string. 
Tipagem dinâmica: Quando você declara uma variável o tipo dela é associado ao valor que ela está armazenando naquele determinado momento, de forma que em determinado momento a variável pode armazenar um número inteiro e em outro uma string.

2. Qual o principal problema do uso de tipagem dinâmica?
A detecção de erros pode passar despercebida

3. Pesquise um exemplo na internet em que a tipagem dinâmica pode ser
problemático.
Um cenário comum e problemático para linguagens de tipagem dinâmica ocorre na integração com sistemas externos, como o consumo de dados de uma API web. A ausência de uma verificação de tipos em tempo de compilação pode introduzir bugs lógicos silenciosos se o formato dos dados recebidos for alterado sem aviso.


4. Crie uma variável chamada idade do tipo number e tente atribuir a ela um valor
string. O que acontece?:
O próprio VSCode aponta o erro: "Type 'string' is not assignable to type 'number'".

5. Agora crie a variável nome sem declarar o tipo (apenas let nome = "Ely";). Qual o
tipo inferido pelo TypeScript?
O tipo será string, pois o typescript consegue analisar o valor e definir seu  tipo, dessa forma, caso vc tentasse atribuir um valor int por exemplo a variável, ele iria apontar erro.

6. Pesquise e exemplifique porque dizemos que a linguagem C, mesmo tendo
tipagem estática, possui tipagem fraca.

A linguagem C é classificada como possuindo um sistema de tipagem estático, porém fraco, significa que, embora a verificação de tipos seja feita em tempo de compilação, a linguagem oferece mecanismos que permitem ao programador contornar as regras de tipo com relativa facilidade 


7. Poderíamos dizer que a tipagem do TypeScript é fraca por uma variável do tipo
number aceitar tanto inteiros como ponto flutuante?

Não, o sistema de int e float apenas é unificado, não existindo distinção entre eles. Para ser considerado uma linguagem fraca, deveria ser permitido ao programador "burlar" os tipos das variáveis, coisa que não acontece em TypeScript

8. Execute os exemplos abaixo em um ambiente de JavaScript puro:
a. Exemplo 1:
let a = 10;
let b = "5";
console.log(a + b);

Resultado: 105
Na linguagem JavaScript o operador "+" serve tanto para realizar a adição quanto para concatenar strings, na regra da linguagem, diz que se ao menos um dos operandos for string, a operação realizada é a de concatenação. Portanto, no exemplo ele converte a variável "a" em string e concatena

b. Exemplo 2:
let x = true;
let y = 2;

console.log(x + y);

Resultado: 3
Nesse caso, como nenhum dos operandos é uma string, a operação é uma adição, dessa forma, ela converte a expressão booleana "true" em seu equivalente numérico que é igual a 1. Dessa forma, x = 1; y = 2, logo: x+y = 3

c. Exemplo 3:
console.log(0 == false); // true
console.log("" == false); // true
console.log(null == undefined); // true

Resultado:
true
true 
true

Na linguagem Java Script, o operador "==" não serve só para comparar os valores, em relação ao tipo, se eu tentar comparar dois tipos diferentes, um dos valores é convertido no tipo do outro, então no caso 1, a expressão booleana "false" é convertida em 0, logo, 0 == 0 é igual a true. No segunda caso, o mesmo acontece, só que em contrapartida, "" é convertida em 0. No caso 3, é mais especificamente uma regra da linguagem que diz que o null e undefined são iguais apenas quando se usa o operador "==".


Quais os resultados? Teça comentários a respeito.

9. Execute os dois mesmos exemplos em um ambiente TypeScript. Verifique o
que acontece e comente sobre.

Os resultados serão os mesmos observados no código em JavaScript, haja vista que o código final é nessa linguagem.

10, 11, 12, 13, 14 

16. A opção "allowUnreachableCode" controla como o compilador lida com uma linha de código que não pode ser executada. Quando a opção está configurada como "false" o compilador emite um erro. Quando a opção está configurada como "true" o compilador ignora esse tipo de situação, não alertando sobre o erro, e o código consegue ser compilado.

17. Quando "noImplicitAny" está configurado como false, o código compila e executa sem nenhum erro. Já quando o "noImplicitAny" é definido como true, o compilador do TypeScript passa a emitir um erro na linha let valor; o erro indicará que a variável 'valor' tem implicitamente o tipo 'any' 


18. Com strictNullChecks: true, o compilador acusa erros se uma variável puder ser null, forçando um código mais seguro. Com false, ele permite, o que pode causar erros durante a execução do programa.
