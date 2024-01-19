


//Closures ou Fechamentos

function soma(x) {
    return function(y) {
        return x+y;
    }
}

// Para chamar essa função, fazemos:

console.log(soma(10)(20))


somaParcial = soma(100);

console.log(somaParcial(10))
console.log(somaParcial(20))
console.log(somaParcial(30))
console.log(somaParcial(40))
