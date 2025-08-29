// funciones nativas js
const numeros = [1, 2, 3, 4, 5];

// forEach
numeros.forEach(function(num) {
    console.log(num);
});

// map
const dobles = numeros.map(function(num) {
    return num * 2;
});
console.log(dobles);

// filter
const mayoresQueTres = numeros.filter(function(num) {
    return num > 3;
});
console.log(mayoresQueTres);

// reduce
const suma = numeros.reduce(function(acumulador, num) {
    return acumulador + num;
}, 0);
console.log(suma);

alert("Operación completada");
let numero = prompt("Ingrese un número");
numero = parseInt(numero);

let decimal = numero.toFixed(2);