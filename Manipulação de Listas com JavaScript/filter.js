const {print} = require('./print')

//O filter recebe

const lista = [1,2,3,4,5,6,7,8,9,10]
                        //recebe um elemento para ser buscado dentro de certa condição
const listaPares = lista.filter((element) => {
    return (element % 2 === 0)
})

print(listaPares)

