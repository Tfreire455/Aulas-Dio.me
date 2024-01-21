const promessa = new Promise((resolve, rejects) => {
    setTimeout(() => {
        resolve('Sucesso')
    }, 3000)
})

promessa.then((mensagem) => {
    console.log(mensagem)
})