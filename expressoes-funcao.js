// declaracao de funcao 

// function minhaFuncao(param){
//     //bloco de código
// }

// minhaFuncao("param")

// expressao de funcao


// console.log(soma(1, 1))

// diferenca principal ??
// funcoes e var são "listadas" no topo (hoisting) do arquivo

console.log(apresentar())

function apresentar(){
    return "olá";
}

console.log(soma(1, 1))
const soma = function(num1, num2) {return num1 + num2}