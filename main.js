/*
const arr = [1, 3, 4, 5, 6];

const newArr = arr.map(item => item * 2);

console.log(newArr);

const teste = () => ({ nome: "Doido" });

function soma(a, b) {
    return a + b;
}
*/


// Desestruturação de objetos
/*
const usuario = {
    nome : "Diego",
    idade: 23,
    endereco: {
        cidade: "Rio do Sul",
        estado: "SC",
    }
}


const nome   = usuario.nome;
const idade  = usuario.idade;
const cidade = usuario.endereco.cidade;

const { nome, idade, endereco: { cidade } } = usuario;


function mostraNome({ nome, idade }) {
    console.log(nome, idade);
}

mostraNome(usuario);
*/

const usuario = {
    nome: "Doido",
    idade: 25,
    empresa: "iHealth"
};

// rest
const { nome, ...resto } = usuario;

function soma(...params) {
    return params.reduce((total, next) => total + next);    
}

// spread
const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr3 = [ ...arr1, ...arr2 ];

const usuario1 = {
    nome: "Carlos",
    idade: 23,
    empresa: "RocketSeat"
};

const usuario2 = { ...usuario1, nome: "Doido" };

console.log(usuario2);
