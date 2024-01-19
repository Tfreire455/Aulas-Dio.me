
const { gets, print } = require('./Importação e exportação/FuncoesAux exercicio1');

let media = [], notas = 0;

for (let i = 0; i < 6; i++) {
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
print(mediaFinal.toFixed(1));