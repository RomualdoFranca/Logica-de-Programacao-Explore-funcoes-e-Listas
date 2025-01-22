// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'JOGO DO NÚMERO SECRETO';

function inserirTexto(tag, texto) {
    let titulo = document.querySelector(tag);
    titulo.innerHTML = texto;
}

inserirTexto('h1', 'Calculadora Simples');

//função que efetua a soma
function efetuaSoma(){
    const div = document.getElementById('display');
    const h5 = div.querySelector('h5');
    h5.textContent = prompt('Digite dois números para realizar a soma.');
}

// function textoDisplay(){
//     const textoDisplay = document.getElementById("textoDisplay");
//     textoDisplay.textContent = efetuaSoma;

// }