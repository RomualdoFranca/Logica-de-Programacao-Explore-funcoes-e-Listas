
let numeroLimite = 10;
let numeroSecreto = geraNumeroAleatorio();

function geraNumeroAleatorio() {
    let numero = parseInt(Math.random() * numeroLimite + 1);
    return numero;
}

console.log("Numero secreto: " + numeroSecreto);

function toggleClass(elemento, classe) {
    if(elemento) {
        elemento.classList.toggle(classe);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const conteudoPrincipal = document.getElementById("main-section");
    const butaoChute = document.getElementById("button-chute");

    butaoChute.addEventListener("click", () => {
        toggleClass(conteudoPrincipal, "modo-escuro");
    })
});