// for of loop 
const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

for(const pendiente of pendientes) {
    console.log(pendiente);
}

const carrito = [
    { nombre: 'Monitor 20 pulgadas', precio: 500 },
    { nombre: 'Televisión 50 pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audífonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500 },
];

for(const producto of carrito) {
    console.log(`Producto: ${producto.nombre} - Precio: ${producto.precio}`);
}

// length of carrito array using for of loop
let total = 0;
for(const producto of carrito) {
    total += producto.precio;
}
console.log(`Total a pagar: ${total}`);

// For of Continue and Break example
for(const producto of carrito) {
    if(producto.precio > 400) {
        console.log(`Omitiendo producto: ${producto.nombre} - Precio: ${producto.precio}`);
        continue; // skip products with price greater than 400
    }
    console.log(`Producto: ${producto.nombre} - Precio: ${producto.precio}`);
}

for(const [index, producto] of carrito.entries()) {
    if(index === 3) {
        console.log('Se detuvo la ejecución en el índice 3');
        break; // exit the loop when index is 3
    }
    console.log(producto.nombre);
}

// Note: The for...of loop does not have a built-in index, so to get the index we can use the entries() method which returns an array of [index, value] pairs.