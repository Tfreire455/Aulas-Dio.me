//  First Class Function
//  High Order Function

function falarMeuNome() {
    console.log("Meu nome é Thiago")
}

const referenciaNova = falarMeuNome;

referenciaNova()
 
//podemos passar uma função para outro função

function falarMeuNomeCompleto(falarMeuNome) {
    falarMeuNome
    console.log("Moabi de Souza Freire")
}

falarMeuNomeCompleto(falarMeuNome)


// Function declaration

function nomeDaFuncao( ) {

}

// Function expression

const nomeDeOutraFuncao = function () {

}

//Diferenças - Hoisting

/** */
