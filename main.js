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
const usuario = {
    nome : "Diego",
    idade: 23,
    endereco: {
        cidade: "Rio do Sul",
        estado: "SC",
    }
}

/*
const nome   = usuario.nome;
const idade  = usuario.idade;
const cidade = usuario.endereco.cidade;

const { nome, idade, endereco: { cidade } } = usuario;
*/

function mostraNome({ nome, idade }) {
    console.log(nome, idade);
}

mostraNome(usuario);