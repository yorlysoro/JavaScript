const numero1 = 20;
const numero2 = 10;
const numero3 = 5;

// revisar si los numeros son iguales
console.log(numero1 === numero2); // false
console.log(numero1 === 20); // true
console.log(numero2 === 10); // true
console.log(numero3 === 5); // true

// revisar si los numeros son iguales con ==
console.log(numero1 == numero2); // false
console.log(numero1 == 20); // true
console.log(numero2 == 10); // true
console.log(numero3 == 5); // true

// revisar si los numeros son iguales convertidos a string
console.log(numero1 == "20"); // true
console.log(numero2 == "10"); // true
console.log(numero3 == "5"); // true

// revisar si los numeros son diferentes
console.log(numero1 !== numero2); // true
console.log(numero1 !== 20); // false
console.log(numero2 !== 10); // false
console.log(numero3 !== 5); // false