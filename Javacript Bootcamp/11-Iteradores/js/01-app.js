// For Loop
const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

for(let i = 0; i < pendientes.length; i++) {
    console.log(pendientes[i]);
    console.log("Indice: " + i);
    if(i % 2 === 0) {
        console.log(`${pendientes[i]} - Es un indice par`);
    } else {
        console.log(`${pendientes[i]} - Es un indice impar`);
    }
}

const carrito = [
    { nombre: 'Monitor 20 pulgadas', precio: 500 },
    { nombre: 'Televisión 50 pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audífonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500 },
];

for(let i = 0; i < carrito.length; i++) {
    console.log(`Producto: ${carrito[i].nombre} - Precio: ${carrito[i].precio}`);
}

// length of carrito array using for loop
let total = 0;
for(let i = 0; i < carrito.length; i++) {
    total += carrito[i].precio;
}
console.log(`Total a pagar: ${total}`);
