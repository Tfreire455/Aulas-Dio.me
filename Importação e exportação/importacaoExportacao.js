const entrada = [5, 10, 23, 93, 65]
let i = 0

function gets() {
    const valor = entrada[i]
    i++
    return valor;
};

function print(texto) {
    console.log(texto);
}

//Exportando dados com module.exports com um objeto literal
module.exports = {
    gets,
    print
} 