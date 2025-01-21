// altera o titulo da pagina
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

// cria uma funcao que exibe msg quando o botao de console é clicado
function verificarClick() {
    console.log('O botão console foi clicado');
}

// exibe alerta sempre que o botao de alerta for clicado
function exibirAlerta() {
    alert('Eu amo JavaScript');
}
// exibe um alerta com uma string concatenada com o input da cidade
function exibirNomeDeCidade(){
    let nomeDaCidade = prompt('Digite o nome de uma cidade do Brasil.');
    alert(`Estive em ${nomeDaCidade} e lembrei de você.`);
}
// pede dois numeros inteiros e exibe um alerta com o resultado da soma 
function pedir2NumerosInteiros() {
    alert('Digite dois números inteiros');

    let primeiroNumero = prompt('Digite o 1° número.');
    let segundoNumero = prompt('Digite o 2° número.');
    let resultadoSoma = primeiroNumero + segundoNumero;
    alert(`A soma de ${primeiroNumero} + ${segundoNumero} = ${resultadoSoma}`);
}