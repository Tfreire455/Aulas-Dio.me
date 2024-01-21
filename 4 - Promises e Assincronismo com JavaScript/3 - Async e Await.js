/*Importa o módulo 'fs' (file system) do Node.js, 
que fornece métodos para interagir com o sistema de arquivos.*/
const { error } = require('console');
const fs = require('fs');

/* Importa o módulo 'path' do Node.js, que lida com
manipulação e construção de caminhos de arquivo.*/
const path = require('path');

/*Constrói o caminho absoluto para o arquivo '2-arquivo.csv' usando a 
função path.resolve. __dirname é uma constante que representa o 
diretório atual do script.*/
const filePath = path.resolve(__dirname, '2-arquivo.csv')

//Declara uma função assíncrona chamada 'arquivo'.
async function arquivo() {
    try {
        /* Lê o conteúdo do arquivo especificado (filePath) de forma assíncrona 
        usando fs.promises.readFile e armazena na variável meuArquivo.*/
        const meuArquivo = await fs.promises.readFile(filePath)

        /* Converte o conteúdo lido (que está em formato de buffer) para uma string
        usando a codificação 'utf8' e armazena na variável arquivo.*/
        const arquivo = meuArquivo.toString('utf8')
        console.log(arquivo)
    } catch {
        console.error('Deu Ruim, ', error)
    } finally {
        console.log('Fim')
    }
}

arquivo()