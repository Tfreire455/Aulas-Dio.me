function contarAte(quantidade) {
    return new Promise((resolve, rejects) => {
        let contador = 1;
        let intervalo = setInterval(() => {
            console.log(contador);
            if (contador === quantidade) {
                intervalo = clearInterval(intervalo);
                resolve('Sucesso');
            }
            contador++
        }, 1000)
    })
}

contarAte(10).then((mensagem) => {
    console.log(mensagem)
})