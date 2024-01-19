const {print} = require('./print')

const lista = [1,2,3,4,5,6,7,8,9,10]

lista.forEach((value, i, listRef) => {
    print(`o número ${value} está na posição ${i} da lista ${lista.join('-')}`)
})

const listaNome = [new Pessoa('Thiago', 23, 'M'), new Pessoa('Thailyne', 22, 'F'), new Pessoa('Fabiana', 40, 'F'), new Pessoa('Rosana', 53, 'F')]

print(lista)

const masculino = lista.map(() => {
    if (Pessoa.gender === 'M') {
        return Pessoa.name
    }
})


/// Percorre elementos de uma lista

