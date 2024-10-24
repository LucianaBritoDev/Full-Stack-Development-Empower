console.log("Olá, mundo!");

// Variáveis são espaços de armazenamento para guardar dados.

//let e const:
// declaração nomeDaVariavel = valor/dado

//Exemplos:

let nomeDoUsuario = "Maria"; //String - dado textual. Sempre usa "" (aspas).

let placaCarro = "fgh47j0"; // Também pode ser considerado uma String, mesmo tendo números ao lado de letras. As informações podem ser alteradas.

const mesesDoAno = 12; //Number - dado númerico. Não precisa de "" (aspas). As informações não podem ser alteradas.

console.log(mesesDoAno);

// Condição simples:

//if(true) {
// executa o código quando for verdadeiro
//}

let botaoAtivado = true; //Boolean - true ou false (verdadeiro ou falso)

if (botaoAtivado) {
  console.log("Sua página ficou com o background preto");
}

// Condições complexas:

let idade = 12;
if (idade >= 18) {
  console.log("Você deve votar!");
} else {
  console.log("Você ainda não pode votar");
}

let maiorDeIdade = false;
if (maiorDeIdade) {
  console.log("Você pode se cadastrar do Facebook");
} else {
  console.log("Você é menor de idade e não pode cadastrar no Facebook");
}

// Operadores de Comparação

// = (recebe) atribui um valor
// == igual a: faz a verificação do valor
// === estritamente igual: verificação do valor
// != verifica se os valores comparados são diferentes
// !== verifica se o valor e o tipo comparado é diferente
// > maior que
// < menor que
// >= maior ou igual
// <= menor ou igual

let number = 2;
let numero = "2";

// == verificação de valor
console.log(numero == 2); //true pois o valor de numero é 2 mesmo sendo string

// === verificação de tipo e valor
console.log(number === "2"); //false pois number é do tipo number e "2" é do tipo string

// != verifica se os valores comparados são diferentes
console.log(number != numero); //false pois os valores são o mesmo

// !== verifica se o valor e o tipo comparado é diferente
console.log(number !== 2); //false pois number não é diferente de 2

// > maior que
console.log(number > 0); //true pois number é maior que 0

// < menor que
console.log(number < 0); //false pois number não é menor que 0

// >= maior ou igual
console.log(number >= 0); //true pois number é maior que 0

// <= menor ou igual
console.log(number <= 8); //true pois number é menor que 8
