const { print } = require('./print')
// Crie um programa que retorne todos os nomes masculinos

class Pessoa {
    constructor(name, age, gender) {
        this.name = name,
            this.age = age,
            this.gender = gender;
    }
}

const lista = [new Pessoa('Thiago', 23, 'M'), new Pessoa('Thailyne', 22, 'F'), new Pessoa('Fabiana', 40, 'F'), new Pessoa('Fabiana', 40, 'F'), new Pessoa('Rosana', 53, 'F'), new Pessoa('Rogerio', 48, 'M'), new Pessoa('Mauricio', 55, 'M'), new Pessoa('Samuel', 29, 'M')]

// print(lista)

const masculino = lista.filter((e) => e.gender === 'M').map((e) => e.name).join(', ')
print(masculino)

let idadeSoma = lista.filter((e) => e.gender === 'M').map((e) => e.age).join(', ')
print(idadeSoma)