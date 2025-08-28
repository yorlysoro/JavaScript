// Destructuring
const frutas = ['manzana', 'banana', 'naranja'];
const [a, b, c] = frutas;
console.log(a, b, c);

// More examples
const numeros = [1, 2, 3, 4, 5];
const [x, y, z] = numeros;
console.log(x, y, z);

// Destructuring with rest
const [first, ...rest] = numeros;
console.log(first);
console.log(rest);