console.log("Arrays");

// () parênteses
// [] colchetes
// {} chaves
// Array é uma super variável que vai armazenar mais de um dado

//Índices        0         1        2         3         4

let frutas = ["Maçã", "Banana", "Laranja", "Uva", "Morango"];
console.log(frutas);

// Podemos armazenar vários tipos de dados diferentes
//                 0        1     2
let sobreMim = ["Luciana", 34, "Pera"];

// Para imprimir no console um item específico donosso array
// console.log(nomeDaVariavel[indice])

console.log(sobreMim[2]);

let series = ["Stranger Things", "Orphan Black", "Supernatural", "The Boys"];
console.log(series);

// .push() - Para acrescentar mais um valor no FINAL do array

series.push("Breaking Bad");
console.log(series);

// .unshift() - Para acrescentar mais um valor no INÍCIO do array

series.unshift("Jack Ryan");
console.log(series);

// .reverse() - Organizar os elementos ordem inversa

series.reverse();
console.log(series);

// .sort() - Organiza os elementos em ordem crescente (númerica ou alfabética)

series.sort();
console.log(series);

// .shift() - Remove o PRIMEIRO valor da lista

series.shift();
console.log(series);

// .pop() - Remove o ÚLTIMO valor da lista

series.pop();
console.log(series);

// .slice() - Pega os itens de um array criando um novo sem desmontar o original

let topTresMelhores = series.slice(1, 4);
console.log(topTresMelhores);
