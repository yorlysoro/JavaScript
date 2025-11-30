// Arrow Functions with map and forEach
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

// Using forEach with an arrow function
meses.forEach((mes) => {
    console.log(mes);
});

// Using map with an arrow function to create a new array
const mesesConNumero = meses.map((mes, index) => {
    return `${index + 1} - ${mes}`;
});

console.log(mesesConNumero);

// Arrow Functions with filter
const numeros = [10, 25, 30, 45, 60, 75, 80];

// Using filter with an arrow function to get numbers greater than 50
const numerosMayoresA50 = numeros.filter(numero => numero > 50);

console.log(numerosMayoresA50);

// Purchase Car Example with Arrow Functions
const carrito = [
    { nombre: 'Monitor 20 pulgadas', precio: 500 },
    { nombre: 'Televisión 50 pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audífonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500 },
];

// Using forEach with an arrow function to display cart items
carrito.forEach(producto => console.log(`${producto.nombre} - Precio: ${producto.precio}`));

// Using map with an arrow function to create a new array of product names
const nombresProductos = carrito.map(producto => producto.nombre);

console.log(nombresProductos);

// Using filter with an arrow function to get products with price greater than 400
const productosCaros = carrito.filter(producto => producto.precio > 400);

console.log(productosCaros);