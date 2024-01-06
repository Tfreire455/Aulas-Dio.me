function gets() {
    console.log(10);
};

function print(texto) {
    console.log(texto);
}

//Exportando dados com module.exports com um objeto literal
module.exports = {
    gets,
    print
} 