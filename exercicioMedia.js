
const { gets, print } = require('./Importação e exportação/importacaoExportacao');

let media = [], notas = 0;

for (let i = 0; i < 5; i++) {
    media.push(gets());
};
for (let i = 0; i < media.length; i++) {
    notas = notas + media[i];
};
let mediaFinal = notas / media.length;
if (mediaFinal < 5) {
    print("Reprovado")
} else if (mediaFinal >= 5 && mediaFinal < 7) {
    print("Recuperação")
} else {print("Aprovado")}

print(media);
print(notas);
print(mediaFinal);