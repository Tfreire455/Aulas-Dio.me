let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let soma = lista.reduce((anterior, atual) => {
     return anterior + atual
})
console.log(soma)

//Reduz os elementos da lista a um único elemento