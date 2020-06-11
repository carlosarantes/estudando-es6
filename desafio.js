/*
    DESAFIO 1
    ---------------------------------
    class Usuario {

        constructor(email, senha){
            this.email = email;
            this.senha = senha;
            this.setAdmin(false);
        }

        isAdmin() {
            return this.admin;
        }

        setAdmin(admin){
            this.admin = admin;
        }
    }

    class Admin extends Usuario {

        constructor(email, senha){
            super(email, senha);
            this.setAdmin(true);
        }
    }

    const User1 = new Usuario('email@teste.com', 'senha123');
    const Adm1 = new Admin('email@teste.com', 'senha123');

    console.log(User1.isAdmin()) // false
    console.log(Adm1.isAdmin()) // true

    ================================================
    DESAFIO 2
    ---------------------------------


    // Obtendo as idades dos usuarios
    const usuarios = [
        { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
        { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
        { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
    ];

    const idades = usuarios.map((usuario) => usuario.idade );
    console.log(idades);

    // Usuarios que trabalham na Rocketseat com mais de 18 anos
    const empregadosRocketseat = usuarios.filter( usuario => (usuario.empresa == 'Rocketseat' && usuario.idade > 18) );
    console.log(empregadosRocketseat);

    // Usuario que trabalha na empresa google
    const funcionarioGoogle = usuarios.find( usuario => usuario.empresa == 'Google');
    console.log(funcionarioGoogle);

    // Usuarios ficando mais velhos
    const maisVelhos = usuarios.map( (usuario) => {
        usuario.idade *= 2;
        return usuario;
    }).filter(usurio => usurio.idade <= 50);
    console.log(maisVelhos);

    ================================================
    DESAFIO 3
    ---------------------------------

    // Tranformar em arrow function
    const arr = [1, 2, 3, 4, 5];
    const itens = arr.map(item =>item + 10);
    console.log(itens);

    const usuario = { nome: 'Diego', idade: 23 };
    const mostraIdade = (usuario) => usuario.idade;
    console.log("Idade: ", mostraIdade(usuario));



    const nome = "Diego";
    const idade = 23;
    const mostraUsuario = (nome = 'Diego', idade = 18) => ({ nome, idade });

    console.log(mostraUsuario(nome, idade));
    console.log(mostraUsuario(nome));


    const promise = () => new Promise((resolve, reject) => resolve());

    
    ================================================
    DESAFIO 4
    ---------------------------------

    const empresa = {
        nome: 'Rocketseat',
        endereco: {
            cidade: 'Rio do Sul',
            estado: 'SC',
        }
    };

    const { nome, endereco: { cidade, estado }  } = empresa; 

    console.log(nome); // Rocketseat
    console.log(cidade); // Rio do Sul
    console.log(estado); 
    
    function mostraInfo({ nome, idade }) {
        return `${nome} tem ${idade} anos.`;
    }
    console.log(   mostraInfo({ nome: 'Carlota', idade: 25 })  );


    ================================================
    DESAFIO 5
    ---------------------------------

    // REST/SPREAD

    const arr = [1, 2, 3, 4, 5, 6];

    const [ x, ...y ] = arr;

    console.log(x); // 1
    console.log(y); // [2, 3, 4, 5, 6]





    // function soma...
    const soma = (...params) => params.reduce( (total, next) => total + next);

    console.log(soma(1, 2, 3, 4, 5, 6)); // 21
    console.log(soma(1, 2)); //


    const usuario = {
        nome: 'Diego',
        idade: 23,
        endereco: {
            cidade: 'Rio do Sul',
            uf: 'SC',
            pais: 'Brasil',
        }
    };

    const usuario2 = {
        ...usuario,
        nome: "Gabriel"
    };

    const usuario3 = {
        ...usuario,
        nome: "Lontras"
    };

    console.log(usuario2);
    console.log(usuario3);


    ================================================
    DESAFIO 6
    ---------------------------------

    // TEMPLATE LITERALS

    const usuario = 'Diego';
    const idade = 23;
    console.log(`O usuário ${usuario} possui ${idade} anos`);


    ================================================
    DESAFIO 7
    ---------------------------------

    // Sintaxe curta de objetos

    const nome = 'Diego';
    const idade = 23;
    const cidade = 'Rio do Sul',
    const usuario = {
        nome,
        idade,
        cidade
    };
 */