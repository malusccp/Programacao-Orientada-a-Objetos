// 3. Crie uma função que retorne os números de um array passados por parâmetro
// separados por traço (-) no formato string. Para isso, use o método forEach dos
// arrays. 

function forEach_(array: number[]): string{
    let answer = "";
    array.forEach(numero => {answer += numero + "-"});
    
    return answer.slice(0, -1);
}

let nums = [3, 4, 5 , 7, 8];
let result = forEach_(nums);
console.log(result);