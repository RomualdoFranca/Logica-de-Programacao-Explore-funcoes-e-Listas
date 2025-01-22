// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'JOGO DO NÚMERO SECRETO';

function inserirTexto(tag, texto) {
    let titulo = document.querySelector(tag);
    titulo.innerHTML = texto;
}

inserirTexto('h1', 'Calculadora Simples');

//função que efetua a soma
function efetuaSoma(){
    console.log('O botão da soma foi clicado');
}