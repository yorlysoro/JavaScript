// Filter method example
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Obtener los productos que cuestan más de 300
const productosCaros = carrito.filter( producto => producto.precio > 300 );
console.log(productosCaros);
// Output: 
// [
//   { nombre: 'Monitor 27 Pulgadas', precio: 500 },
//   { nombre: 'Teclado', precio: 400 },
//   { nombre: 'Celular', precio: 700 }
// ]