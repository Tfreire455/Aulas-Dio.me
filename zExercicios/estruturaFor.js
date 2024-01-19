//Arrays e estruturas de repetição

//Estrutura for() para percorrer array


 function Tabuada(valor) {

     for (let i = 0; i <= 10 ; i++) {
         let tabuada = valor * i;
         console.log(`${valor} x ${i} = ${tabuada}`)
     };
 };

 Tabuada(3);

// let notas = [];

// notas.push(5);
// notas.push(7);
// notas.push(8);
// notas.push(2);
// notas.push(5);
// notas.push(8);



// let soma = 0;

// for (i = 0; i < notas.length; i++) {
//     const nota = notas[i];
//     soma = soma + nota;
// };

// console.log(soma);

// const media = soma / notas.length;

// console.log(media.toFixed(1));