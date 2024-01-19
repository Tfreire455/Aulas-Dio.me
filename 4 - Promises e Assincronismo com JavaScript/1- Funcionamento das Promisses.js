/// Como criar uma Promise?!

const { print } = require('../4 - Promises e Assincronismo com JavaScript//print')

                //Criando a promessa - e uma função que recebe os parametros resolve e reject
const newNumber = new Promise((resolve, reject) => {
               //Recebendo função anonima, que vai fazer o *const number*, se der certo, vai reolver retornando o ''number'' com *resolve(number)*
    setTimeout(() => {
        //faça isso     
        const number = parseInt(Math.random() * 100);
        // se der certo:
        resolve(number)
        // devolva em dois segundos
    }, 2000)

})


newNumber
//Quando a operação assíncrona é bem-sucedida, este bloco é executado, e value contém o resultado da operação.
.then((value) => {
    console.log(value);
    //Se ocorre um erro na operação, este bloco é executado, e error contém informações sobre o erro.
}).catch((error) => {
    console.error(error);
    //Este bloco é sempre executado, independentemente de a operação ser bem-sucedida ou falhar. Ele imprime 'Fim' no console.
}).finally(() => console.log('Fim'));


print('Vai filhão')

    /* o assincronismo permite que o código faça algo similar. Em vez de esperar por uma tarefa demorada (como carregar uma imagem ou buscar dados da internet), o programa pode continuar fazendo outras coisas. Isso ajuda a tornar os programas mais rápidos e eficientes, sem ficar "parado" esperando por uma única tarefa ser concluída.*/