const { gets, print } = require("./Importação e exportação/FuncoesAux exercicio3");

let salario = null, beneficio = null, total = null,
    aliquota = null;

salario = gets();
beneficio = gets();

if (salario >= 0.0 && salario <= 1100.00) {
    aliquota = 5 / 100;
    total = (salario + beneficio) - aliquota;
} else if (salario >= 1100.01 && salario <= 2500.00) {
    aliquota = 10 / 100;
    total =  (salario + beneficio) - aliquota;
} else if (salario > 2500.01) {
    aliquota = 15 / 100;
    total =  (salario + beneficio) - aliquota;
};

print(total.toFixed(0))
print('====================')
print(salario)
print(beneficio)