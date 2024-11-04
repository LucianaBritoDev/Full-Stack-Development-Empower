console.log("Funções");

//Funções são conjuntos de instruções que executam uma tarefa.

// Estrutura:

//function nomeDaFunção(){
//código a ser executado
//}

// A função é muito importante para o agrupamento e reutilização do código.

function saudacao() {
  console.log("Bom dia!");
}

saudacao(); // Para executar a função é preciso chamá-la.

// Argumentos e Parâmetros

//Parâmetros:
let infos = function (nome, idade, cidade) {
  console.log(nome);
  console.log(idade);
  console.log(cidade);
  console.log(nome, idade, cidade);
};

// Argumentos:
infos("Bruce Wayne", "36 anos", "Gotham City");
// O exemplo acima é muito específico.

// Variáveis dentro do Parâmetro
// 1 - Começar criando uma função para mostrar o nome de uma fruta;
// 2 - Essa função vai receber uma fruta como argumento;
// 3 - Vamos chamar mostrarFruta(com a variável que criamos)

let frutaPreferida = "Pera";

function mostrarFruta(fruta) {
  console.log(fruta);
}

mostrarFruta(frutaPreferida);
// O acima é mais usual.

// Arrow Functions: funções de seta =>:

//const nomeDaFuncão = (parâmetros) =>{código a ser executado}

const boasVindas = (nome) => {
  console.log(nome);
};

boasVindas("Luciana!");

// Calculadora para dobrar número

const dobrar = (numero) => numero * 2;

console.log(dobrar(5));

// Função que calcula a área de um retângulo

const calcularArea = (largura, altura) => largura * altura;
console.log(calcularArea(5, 3));
