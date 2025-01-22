
let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto) {
    let campos = document.querySelector(tag);
    campos.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do Número Secreto');
exibirTextoNaTela('p', 'Escolha o um número entre 1 e 10');

console.log(numeroSecreto);
// tem responsabilidade de realizar alguma ação. tem de ter uma responsabilidade única
function verificarChute() { // sem retorno
    console.log(numeroSecreto);
    
    let inputNumero = document.querySelector('input').value;
    inputNumero == numeroSecreto ? console.log('Você acertou') : console.log('Você errou.'); 
    // console.log(numeroSecreto);
}
// sem parametro com retorno
function gerarNumeroAleatorio() {
   return parseInt(Math.random() * 10 + 1);
}