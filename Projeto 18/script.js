console.log("Revisão");
// Array é uma super variável que vai armazenar mais de um tipo de dado. Usa-se colchetes.

let diasDaSemana = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
];
console.log(diasDaSemana);
console.log(diasDaSemana[5]);

// Objetos é uma coleção de informações ou propriedades. Usa-se chaves.

//Estrutura:

//const objeto = {
//chave1: valor1,
//chave2: valor2,
//chave3: valor3
//};

const pessoa = {
  nome: "Luciana",
  idade: 34,
  profissão: "revisora textual e desenvolvedora web frontend",
};

const carro = {
  marcaDoCarro: "Hyundai",
  modeloDoCarro: "Hynday HB20 Hatch",
  anoDocarro: 2024,
  valorDoCarro: "123.890,00",
};
console.log(carro);

// Para imprimir o valor de uma propriedade de um objeto
console.log(carro.modeloDoCarro);

// Adicionando propriedades:
carro.corDoCarro = "prata brisk";
console.log(carro);

// Removendo uma propriedade:
delete carro.anoDocarro;
console.log(carro);

// Arrays de Objetos:
//                         0           1         2           3
// const devsSeniors = [{objeto1}, {objeto2}, {objeto3}, {objeto4}]

const devsSeniors = [
  {
    nome: "Otávio",
    corFavorita: "Azul",
    comidaPreferida: "Acarajé",
  },
  {
    nome: "Richard",
    corPreferida: "Preto",
    comidaPreferida: "Lasanha",
  },
  {
    nome: "Stephanny",
    corPreferida: "Roxo",
    comidaPreferida: "Escondidinho de Macaxeira",
  },
  {
    nome: "Luciana",
    corPreferida: "Branco",
    comidaPreferida: "Macarronada",
  },
];

console.log(devsSeniors);

//Para acessar a comida preferida do Richard.
console.log(devsSeniors[1].comidaPreferida);

//Para adicionar um novo objeto no final do Array:
devsSeniors.push({
  nome: "Aluno Novo",
  corFavorita: "Tomato",
  comidaPreferida: "Tacacá",
});
console.log(devsSeniors);

//Remover propriedade de um objeto do Array

delete devsSeniors[4].corFavorita;
console.log(devsSeniors);

let frequenciaAluno = 95;
let softSkills = true;
let entregaDesafios = false;

if (frequenciaAluno >= 75 && softSkills && entregaDesafios) {
  console.log("Você receberá o certificado de Dev FullStack");
} else {
  console.log("Sinto muito! Reprovado!");
}

let idade = 45;

if (idade < 12) {
  console.log("Criança");
} else if (idade <= 18) {
  console.log("Adolescente");
} else if (idade <= 60) {
  console.log("Adulto");
} else {
  console.log("idoso");
}

let palavraMagica1 = "abracadabra";
let palavraMagica2 = "shazam";

if (palavraMagica1 === "abracadabra" || palavraMagica2 === "alakazam") {
  console.log("O portal se abriu!");
} else {
  console.log("A magia falhou! Tente outra vez");
}
