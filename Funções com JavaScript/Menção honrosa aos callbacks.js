function mais(x, y){
    return x + y;
};

function menos(x, y){
    return x - y;
};

function vezes(x, y) {
    return x * y;
};

function dividir(x, y) {
    return x / y;
};


function print(texto) {
    console.log(texto)
};

function calculadora(x, operacao, y) {
    print(operacao(x, y))
}

calculadora(10, dividir, 2)