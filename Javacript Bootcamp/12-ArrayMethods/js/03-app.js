// Reduce Example
const numbers = [1, 2, 3, 4, 5];

// Using reduce to sum all numbers in the array
const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log('Sum of all numbers:', sum); // Output: Sum of all numbers: 15

// Output: 2 (index of 'Tablet' in the carrito array)

// Using reduce to find the most expensive product in the carrito array
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

const mostExpensive = carrito.reduce((prev, current) => {
    return (prev.precio > current.precio) ? prev : current;
});

console.log('Most expensive product:', mostExpensive); 
// Output: Most expensive product: { nombre: 'Celular', precio: 700 }