//console.log("teste 1")

// verifique se um número é divisível por 2 ou por 3

//1. com ifs aninhados 

const num = Number (prompt("Digite um número:"));

if (num % 2 === 0){
    console.log("Seu número é divisível por 2.")

if (num % 3 === 0){
    console.log("Seu número é divisível por 3.") 
}else{
    console.log("Seu número não é divisível por 2 nem por 3")
}
}
console.log("Número digitado pelo usuário:", num)