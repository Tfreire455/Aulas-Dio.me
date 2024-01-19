//


function verificarPares(quantidade) {

    let numeros = [];
    for (let i = 0; i < quantidade; i++) {
        numeros[i] = i;
        if (numeros[i] % 2 === 0) {
            console.log(numeros[i])
        };
    };
};

verificarPares(100);