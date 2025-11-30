// While Loop 

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

let i = 0;
while(i < pendientes.length) {
    console.log(pendientes[i]);
    i++;
}

const carrito = [
    { nombre: 'Monitor 20 pulgadas', precio: 500 },
    { nombre: 'Televisión 50 pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audífonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500 },
];

let j = 0;
while(j < carrito.length) {
    console.log(`Producto: ${carrito[j].nombre} - Precio: ${carrito[j].precio}`);
    j++;
}

// length of carrito array using while loop
let total = 0;
let k = 0;
while(k < carrito.length) {
    total += carrito[k].precio;
    k++;
}
console.log(`Total a pagar: ${total}`);

// While Continue and Break example
let m = 0;
while(m < carrito.length) {
    if(carrito[m].precio > 400) {
        console.log(`Omitiendo producto: ${carrito[m].nombre} - Precio: ${carrito[m].precio}`);
        m++;
        continue; // skip products with price greater than 400
    }
    console.log(`Producto: ${carrito[m].nombre} - Precio: ${carrito[m].precio}`);
    m++;
}

let n = 0;
while(n < carrito.length) {
    if(n === 3) {
        console.log('Se detuvo la ejecución en el índice 3');
        break; // exit the loop when n is 3
    }
    console.log(carrito[n].nombre);
    n++;
}