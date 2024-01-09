const { gets, print } = require('./Importação e exportação/FuncoesAux exercicio2')

let maiorPar = null, maiorImpar = null;
let par = null, impar = null, numeroAvaliado = [];

for (let i = 0; i < 6; i++) {
    numeroAvaliado.push(gets());
};

for (let i = 0; i < numeroAvaliado.length; i++) {
    if (numeroAvaliado[i] % 2 === 0) {
        par = numeroAvaliado[i];
        print(`Números pares: ${par}`)
    } else if (numeroAvaliado[i] % 2 !== 0) {
        impar = numeroAvaliado[i];
        print(`Números impares: ${impar}`)
    };
    for (let i = 0; i < numeroAvaliado.length; i++) {
        if (par > maiorPar) {
            maiorPar = par;
        } else if (impar > maiorImpar) {
            maiorImpar = impar;
        };
    };
};
print('----------------')
print('----------------')
print(`Maior número par: ${maiorPar}`);
print(`Maior número impar: ${maiorImpar}`);