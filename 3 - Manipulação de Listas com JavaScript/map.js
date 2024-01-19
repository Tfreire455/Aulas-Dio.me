const {print} = require('./print')

class Pessoa {
    constructor(name, age, gender) {
        this.name = name,
            this.age = age,
            this.gender = gender;
    }
}

const lista = [new Pessoa('Thiago', 23, 'M'), new Pessoa('Thailyne', 22, 'F'), new Pessoa('Fabiana', 40, 'F'), new Pessoa('Rosana', 53, 'F')]

novaLista = lista.map((e) => {
    return e.name
})
print(novaLista)


//Transforma a lista em outra