const pessoa3 = {
    idade: 23,
    name: "Thiago"
}

const moabi = Object.create(pessoa3)

console.log(moabi.name)



////////////////////////////////////////////////////////////////



function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}


Pessoa.prototype.falar = function () {
    console.log(`Meu nome é ${this.nome}`)
}

const Thiago = {
    gender: "Male"
}

Pessoa.call(Thiago, "Thiago", 23)

console.log(Thiago)