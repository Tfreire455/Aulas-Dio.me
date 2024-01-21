const { print } = require('../Aulas-Dio.me/4 - Promises e Assincronismo com JavaScript/print')

function verificarPar(Numero) {
    const promessa = new Promise((resolve, rejects) => {
        if (Numero % 2 === 0) {
            setTimeout(() => {
                resolve(console.log('Sucesso'))
            }, 5000)
        } else {
            setTimeout(() => {
                rejects(console.error('Algo deu errado!'))
            }, 5000)
        }
    })
}
verificarPar(3)