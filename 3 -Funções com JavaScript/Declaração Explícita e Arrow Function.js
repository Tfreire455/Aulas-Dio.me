// forma literal de declarar uma função
function funcao1() {
    console.log(this)
}

// Arrow function
const funcao2 = () => {
    console.log(this)
}

/**
 * Diferenças
 * 
 * A principal diferença é que a arrow function não tem contexto (this)
 * Quando criamos uma função, ela cria um contexto novo e isola todo o código que está dentro dela
 * 
 *
 * 
 * EXEMPLO:
 *  
 */

const thiago = {
    nome: "Thiago",
    funcao1,
    funcao2
}

thiago.funcao1()
/**RESULTAADO */
// {
//     nome: 'Thiago',
//     funcao1: [Function: funcao1],
//     funcao2: [Function: funcao2]
//   }

thiago.funcao2()

/**RESULTAADO */
// {}
