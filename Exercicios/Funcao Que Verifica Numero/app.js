

function verificaNumeroPositivoNegativoZero(numero) {
    if(numero > 0) {
        console.log('Positivo');
    } else if(numero < 0) {
        console.log('Negativo');
    } else {
        console.log('Zero')
    }
}
let input = console.log(prompt('Digite um número'));
parseInt(input);
verificaNumeroPositivoNegativoZero(input);