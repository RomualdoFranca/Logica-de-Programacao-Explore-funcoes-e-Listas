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

// criar uma função que recebe um número como parâmetro e retorna o dobro desse número
function dobraNumero(numero) {
    let dobro = 2 * numero;
    console.log(`O dobro de ${numero} é ${dobro}`);
}
dobraNumero(10);