// Array de fotos
const fotos = ["./img/Phase_1.png", "./img/Phase_2.png", "./img/Phase_3.png"];

// troca o valor do indice da imagem
let indice = parseInt(prompt("Insirira o indice"));

// troca a imagem correspondente ao indice inserido 

function trocarImagem() {
    document.getElementById("imagem").src = fotos[indice];

}