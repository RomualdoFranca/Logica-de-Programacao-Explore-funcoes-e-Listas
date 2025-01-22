function inputNumero(numero) {
    numero = console.log(prompt('Digite um número.'));
    return parseInt(numero);
}

console.log(inputNumero());

function verificaNumeroPositivoNegativoZero() {
    console.log (inputNumero() > 0 ? 'Positivo' : 'Negativo');
}