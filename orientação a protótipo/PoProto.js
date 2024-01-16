



const pessoa = {
    genero: "Masculino"
}
const teste = {
    nome: 'Thiago',
    Idade: 23,
    altura: 2.00,
    __proto__: pessoa
}

// console.log(pessoa)
// console.log(teste)


//Função construtora sempre começa com letra Maiuscula

//Função construtora: 

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}


Pessoa.prototype.falar = function () {
    console.log(`Meu nome é ${this.nome}`)
}

//Podemos chamar a função com o operador --new--

const thiago = new Pessoa('Thiago', 23);

console.log(thiago)
thiago.falar()


///////////////////////////////////////////////////////////////////////////////////////////////////
// SOBRESCRITA E SHADOWNING
class Pessoa2 {
    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade
    }

    conversar() {
        console.log(`Ola! Meu nome é: ${this.nome}`)
    }
}

const thiago2 = new Pessoa2('Thiago', 23)

thiago2.conversar()

console.log(thiago2)


///////////////////////////////////////////////////////////////////////////////////////////////////////////