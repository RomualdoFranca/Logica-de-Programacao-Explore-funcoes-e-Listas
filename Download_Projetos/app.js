function exibirTextoNaTela(tag, texto) {
    let campos = document.querySelector(tag);
    campos.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do Número Secreto');
exibirTextoNaTela('p', 'Escolha o um número entre 1 e 10');


// tem responsabilidade de realizar alguma ação. tem de ter uma responsabilidade única
function verificarChute() {

    console.log('O botão foi clicado');
}