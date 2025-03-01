
function mudaCor(event) {
    // Captura o botão que foi clicado
    let botao = event.target;

    // Encontra o elemento pai (.container)
    let container = botao.closest('.container');

    // Encontra a div dentro do container
    let divAlvo = container.querySelector('div');

    // Lista de cores possíveis
    let cores = ["cyan", "magenta", "yellow", "green", "blue", "red", "purple"];

    // Gera uma cor aleatória da lista
    let corAleatoria = cores[Math.floor(Math.random() * cores.length)];
    // let cor = "green";

    // Altera a cor da div
    divAlvo.style.background = corAleatoria;
}
