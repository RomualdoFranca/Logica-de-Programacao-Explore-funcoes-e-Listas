let numeroLimite = 10;
let numeroSecreto = geraNumeroSecreto();
let indexImg = 0;
const fotos = ["./img/Phase_1.png", "./img/Phase_2.png", "./img/Phase_3.png", "./img/Phase_4.png", "./img/Phase_5.png", "./img/Phase_6.png", "./img/Phase_7.png", "./img/Phase_8.png", "./img/Phase_9.png"];
console.log("Número sorteado " + numeroSecreto);

function geraNumeroSecreto() {
    let numeroSorteado = parseInt(Math.random() * numeroLimite + 1);
    return numeroSorteado;
}

function verificaChute() {
    let chute = document.querySelector("input").value;

    if (chute == numeroSecreto) {
        console.log("A imagem não se altera");
    } else {
        indexImg++;
        alteraImagem();
        limpaCampo();
    }

}

function alteraImagem() {
    document.getElementById("imagem").src = fotos[indexImg];

}

function limpaCampo() {
    chute = document.querySelector("input");
    chute.value = '';
}