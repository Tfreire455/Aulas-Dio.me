const { error } = require("console")

function verificarLetra(letra1, letra2) {
    return promessa = new Promise((resolve, rejects) => {
        setTimeout(() => {
        if (letra1 > letra2) {
            resolve(`Letra ${letra2} vem antes de ${letra1}`)
        } else if (letra1 < letra2) {
            rejects(`Letra ${letra2} vem depois de letra ${letra1}`)
        } else if ((letra1 || letra2 === Number)) {
            rejects('Digite apenas letras', error)
        }}, 5000)
    })
}

verificarLetra(1, 1).then((mensagem) => {
    console.log(mensagem)
}).catch((erro) => {
    console.error(erro)
})