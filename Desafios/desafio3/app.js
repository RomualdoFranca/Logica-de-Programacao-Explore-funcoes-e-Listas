// crie uma função que exibe Olá Mundo no console
function exibirMensagem(){
    console.log('Ola Mundo!');
}
exibirMensagem();

// criar uma função que recebe um nome como parametro e exibe 'Olá,[nome], no console
function exibirMensagemComNome(nome){
    console.log(`Olá, ${nome}!`);
}
exibirMensagemComNome('Lua');
// implementa e testa a funcao do exercicio 4
// criar uma função que recebe um número como parâmetro e retorna o dobro desse número
function dobraNumero(numero) {
    let dobro = 2 * numero;
    console.log(`O dobro de ${numero} é ${dobro}`);
}
dobraNumero(10);

// criar uma função que receba 3 números como parâmetros e retorna a média deles
function calculaMedia(num1, num2, num3) {
    let media = (num1 + num2 + num3) / 3;
   return console.log(`A média de ${num1}, ${num2} e ${num3} é igual a ${media}`);
}
calculaMedia(3, 7, 5);

// criar uma função que receba 2 números como parâmetros e retorna o maior deles
function retornaMaiorNumero(numA, numB) {
    if(numA > numB) {
        return console.log(`${numA} é o número maior`);
    } else if(numB > numA) {
        return console.log(`${numB} é o número maior`);
    }else {
         return console.log('Os números são iguais');
    }
}
retornaMaiorNumero(2, 0);

// criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function multiplicarPorEleMesmo(numero) {
    let resultado = numero * numero;
    return console.log(resultado);
}
multiplicarPorEleMesmo(7);