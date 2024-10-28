//console.log("Revisão");

//Variáveis são espaços no armazenamento para guardar dados.

//let telefoneDoUsuario = 40028922; //number
//console.log(telefoneDoUsuario);

//let senhaDoUsuario = "maria123ç"; //string
//console.log(senhaDoUsuario);

//let nomeCompletoDoUsuario = "Maria dos Santos";

//let nickName = "@mariadossnts";

// Operadores de Comparação

// = (recebe) atribui um valor
// == (igual a) 2 == 2 verifica o valor
// === (estritamente igual) verifica valor E tipo
// < (menor que)
// > (maior que)
// <= (menor ou igual)
// >= (maior ou igual)
// O && é o operador lógico "E" em JavaScript. Ele é usado para combinar duas ou mais condições. A expressão idade >= 12 && idade <= 18 significa que ambas as condições devem ser verdadeiras para que o bloco de código dentro do if seja executado. Especificamente, nesse caso, a condição é verdadeira se a idade for maior ou igual a 18. Se qualquer uma das condições for falsa, o resultado da expressão será falso, e o bloco não será executado.

//let numero = "4";
//console.log(numero < 2);

//let totalCompra = 18;
//if (totalCompra >= 20) {
//console.log("Você recebeu frete grátis! Parabéns!");
//} else {
//console.log("Você não ganhou frete grátis! Sinto muito!");
//}

//let notaAluno = 7.5;
//if (notaAluno >= 6) {
//console.log("Aprovado!");
//} else if (notaAluno >= 5) {
//console.log("Atenção! Você está na média.");
//} else {
//console.log("Reprovado!");
//}

// Exercícios de fixação:

//Atividade 1: Verificação de dia ou noite:
//Crie uma condição composta com uma variável dia e a condição verifica se está de dia mostra 'Está de dia’' senão mostre esta 'Está de noite'

let dia = true;
if (dia) {
  console.log("Ainda há luz do dia!");
} else {
  console.log("Está de noite!");
}

//Atividade 2: Verificação de Temperatura:
//Crie uma variável temperatura que guarda a temperatura atual. Se for maior que 30, exiba "Está muito quente". Caso contrário, mostre "A temperatura está agradável".

let temperatura = 29;

if (temperatura > 30) {
  console.log("Está muito quente!");
} else {
  console.log("A temperatura está agradável!");
}

//Atividade 3: Verificação de Faixa Etária:
//Crie uma variável idade. Se a idade for menor que 12, exiba "Criança". Se a idade for entre 12 e 18, exiba "Adolescente". Se a idade for entre 19 e 60, exiba "Adulto". Se a idade for maior que 60, exiba "Idoso".
let idade = 27;

if (idade < 12) {
  console.log("Criança");
} else if (idade >= 12 && idade <= 18) {
  console.log("Adolescente");
} else if (idade >= 19 && idade <= 60) {
  console.log("Adulto");
} else {
  console.log("Idoso");
}

// Atividade 4: Calculadora de Notas:
//Crie uma variável que receba a nota e depois passe uma condição que verifique se a nota for maior ou igual “9” irá exibir a mensagem "Nota A", se a nota for maior ou igual “8” irá exibir a mensagem "Nota B", se a nota for maior ou igual “7” irá exibir a mensagem "Nota C",se a nota for maior ou igual “6” irá exibir a mensagem "Nota D" e se não for nenhuma das opções anterior exiba “Nota F”.

let nota = 8.5;

if (nota >= 9) {
  console.log("nota A");
} else if (nota >= 8) {
  console.log("nota B");
} else if (nota >= 7) {
  console.log("nota C");
} else if (nota >= 6) {
  console.log("nota D");
} else {
  console.log("nota F!");
}
