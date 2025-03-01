

function toggleClass(elemento, classe) {
    if(elemento) {
        elemento.classList.toggle(classe);
    }
}

document.addEventListener("DOMContentLoaded", () => {

    const conteudoPrincipal = document.getElementById("content-section");
    const buttonChute = document.getElementById("chute");
    
    buttonChute.addEventListener("click", () => {
         toggleClass(conteudoPrincipal, "black-style");
    });

});
