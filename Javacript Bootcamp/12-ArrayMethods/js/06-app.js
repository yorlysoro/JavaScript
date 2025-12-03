// Every example of the "every" method
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Usar every para verificar si todos los productos son mayores a 50
const todosMayoresACincuenta = carrito.every( producto => producto.precio > 50 );
console.log('¿Todos los productos son mayores a 50?', todosMayoresACincuenta);
// Output: ¿Todos los productos son mayores a 50? true

// Usar every para verificar si todos los productos son mayores a 150
const todosMayoresA150 = carrito.every( producto => producto.precio > 150 );
console.log('¿Todos los productos son mayores a 150?', todosMayoresA150);
// Output: ¿Todos los productos son mayores a 150? false
