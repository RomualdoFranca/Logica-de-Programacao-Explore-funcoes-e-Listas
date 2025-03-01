
let numeroLimite = 10;
let numeroSecreto = geraNumeroAleatorio();


function verificaChute() {
    let chute = document.querySelector("input").value;
    if(chute == numeroSecreto) {
        console.log("Tudo permance igual")
    } else {
        console.log("Tudo muda")
        
    }
}

function geraNumeroAleatorio() {
    let numero = parseInt(Math.random() * numeroLimite + 1);
    return numero;
}

console.log("Numero secreto: " + numeroSecreto);

