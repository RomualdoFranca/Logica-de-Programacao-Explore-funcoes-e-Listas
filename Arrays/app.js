//Usando a palavra new para criar uma Array

 const cars = new Array("Saab", "Volvo", "BMW");
 document.getElementById("carros").innerHTML = cars;

//  Convertendo uma Array para String
const frutas = ["banana ", "laranja ", "maçã ", "manga "];
document.getElementById("frutas").innerHTML = frutas;

// Usando array para armazenar informções de usuários
const aluno = ["João", "Pedro da Silva", 12];
// document.getElementById("aluno").innerHTML = 

// Função para inserir o nome numa array

// const alunoInfo = []
// alunoInfo[0] = insereNome();
// alunoInfo[1] = insereSobrenome();
// alunoInfo[2] = insereIdade();

function exibeNome() {
    let nome = document.getElementById("nome").innerHTML;
    alert(`Seu nome é ${nome}`);
}



