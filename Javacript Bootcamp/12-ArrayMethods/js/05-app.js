// Find example
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Usar find para obtener el producto llamado 'Tablet'
const productoBuscado = carrito.find( producto => producto.nombre === 'Tablet' );
console.log('Producto encontrado:', productoBuscado);
// Output: Producto encontrado: { nombre: 'Tablet', precio: 200 }