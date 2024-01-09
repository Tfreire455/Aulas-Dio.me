
//Importando dados com require()
const teste = require('./importacaoExportacao');

teste.print('Teste print');

//Usando Object destructuring
const { gets, print } = require('./importacaoExportacao')

//declaramos um array vazio para receber os valor do gets()
let numerosSorteados = [];

//criamos um loop for() para acessar os valor do gets()
for (let i = 0; i < 5; i++) {
    //criamos uma variavel que recebe os valores
    const numeroSorteado = gets();
    //usamos .push para pegar os valores e colocar na variavel numerosSorteados
    numerosSorteados.push(numeroSorteado)
}

//declaramos uma variavel com valor 0
let maiorValor = 0;

//criamos um loop for para passar pelos valores da variavel numerosSorteados
for (let i = 0; i < numerosSorteados.length; i++) {
    //criamos outra variavel para declarar o numero sorteado de numerosSorteados
    const numeroSorteado = numerosSorteados[i]
    //Criamos uma condição para verificar se numeroSorteado é maior que maiorValor (que está com valor inicial 0)
    if (numeroSorteado > maiorValor) {
        maiorValor = numeroSorteado
    }
}
print(maiorValor);