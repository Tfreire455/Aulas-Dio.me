const fs = require('fs');

const path = require('path');

const filePath = path.resolve(__dirname, '2-arquivo.csv')

const promessaLeituraArquivo = fs.promises.readFile(filePath)

                        //Lê um arquivo e converte seu conteúdo para uma string.
promessaLeituraArquivo.then((arquivo) => arquivo.toString('utf8'))
            //Divide o texto em linhas (split) e remove a primeira linha (slice), presumivelmente um cabeçalho.
    .then((textoDoArquivo) => textoDoArquivo.split('\n').slice(1))
               //Converte cada linha em um objeto com propriedades nome e feito.
    .then((linhaSemCabecalho) => linhaSemCabecalho.map((linha) => {
        //Está transformando as linhas em um objeto com propriedades nome e feito, e usando o split(;) como ponto de separação
        const [nome, feito] = linha.split(';');
        return {
            nome,
            //O método .trim() é usado para remover espaços em branco (como espaços, tabulações e quebras de linha) do início e do final de uma string. 
            feito: feito.trim() === 'true'
        }
    }))
    .then((listaDeTarefas) => console.log(listaDeTarefas))
    .catch((error) => console.log('Deu ruim meu pacero', error))
    .finally(setTimeout(() => console.log('Cabô!'), 5000))