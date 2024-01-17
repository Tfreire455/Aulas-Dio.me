const {print} = require('./print')

class Pessoa {
    constructor(name, age, gender) {
        this.name = name,
            this.age = age,
            this.gender = gender;
    }
}

const lista = [new Pessoa('Thiago', 23, 'M'), new Pessoa('Thailyne', 22, 'F'), new Pessoa('Fabiana', 40, 'F'), new Pessoa('Rosana', 53, 'F')]

print(lista)

const masculino = lista.map(() => {
    if (Pessoa.gender === 'M') {
        return Pessoa.name
    }
})

print(masculino)