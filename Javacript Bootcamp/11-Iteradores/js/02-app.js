// break and continue in for loop
const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

for(let i = 0; i < pendientes.length; i++) {
    if(i === 2) {
        console.log('Se detuvo la ejecución en el índice 2');
        break; // exit the loop when i is 2
    }
    console.log(pendientes[i]);
}

// continue example
const carrito = [
    { nombre: 'Monitor 20 pulgadas', precio: 500 },
    { nombre: 'Televisión 50 pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audífonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500 },
];

for(let i = 0; i < carrito.length; i++) {
    if(carrito[i].precio > 400) {
        console.log(`Omitiendo producto: ${carrito[i].nombre} - Precio: ${carrito[i].precio}`);
        continue; // skip products with price greater than 400
    }
    console.log(`Producto: ${carrito[i].nombre} - Precio: ${carrito[i].precio}`);
}