
//Importando dados com require()
const teste = require('./importacaoExportacao');

teste.print('Teste print');

//Usando Object destructuring
const {gets, print} = require('./importacaoExportacao')

print(gets())
print(gets())
print(gets())
print(gets())
print(gets())