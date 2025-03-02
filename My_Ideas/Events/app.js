
let numeroLimite = 10;
let numeroSecreto = geraNumeroAleatorio();
console.log("Numero secreto: " + numeroSecreto);




function geraNumeroAleatorio() {
    let numero = parseInt(Math.random() * numeroLimite + 1);
    return numero;
}

alterarEstilo("main-section", "button-chute", "modo-escuro");
function verificaChute() {

    let chute = document.querySelector("input").value;
    if(chute == numeroSecreto) {
        console.log("Tudo permance igual")
    } else {
        console.log("Tudo muda")
        
    }
}

function alterarEstilo(seletorElemento, seletorBotao, classe) {

    document.addEventListener("DOMContentLoaded", () => {
        const elemento = document.getElementById(seletorElemento);
        const botao = document.getElementById(seletorBotao);
        if (elemento) {
            botao.addEventListener("click", () => {
                elemento.classList.toggle(classe);
            });
        }
    });
}

// function toggleClass(elemento, classe) {
//     if(elemento) {
//         elemento.classList.toggle(classe);
//     }
// }
// document.addEventListener("DOMContentLoaded", () => {
//     const conteudoPrincipal = document.getElementById("main-section");
//     const butaoChute = document.getElementById("button-chute");

//     butaoChute.addEventListener("click", () => {
//         toggleClass(conteudoPrincipal, "modo-escuro");
//     });

// });



