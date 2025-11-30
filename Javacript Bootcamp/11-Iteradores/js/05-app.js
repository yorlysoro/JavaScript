// Do While Loop

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

let i = 0;
do {
    console.log(pendientes[i]);
    i++;
} while(i < pendientes.length);

const carrito = [
    { nombre: 'Monitor 20 pulgadas', precio: 500 },
    { nombre: 'Televisión 50 pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audífonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500 },
];

let j = 0;
do {
    console.log(`Producto: ${carrito[j].nombre} - Precio: ${carrito[j].precio}`);
    j++;
} while(j < carrito.length);

// length of carrito array using do while loop
let total = 0;
let k = 0;
do {
    total += carrito[k].precio;
    k++;
} while(k < carrito.length);
console.log(`Total a pagar: ${total}`);

// Do While Continue and Break example
let m = 0;
do {
    if(carrito[m].precio > 400) {
        console.log(`Omitiendo producto: ${carrito[m].nombre} - Precio: ${carrito[m].precio}`);
        m++;
        continue; // skip products with price greater than 400
    }
    console.log(`Producto: ${carrito[m].nombre} - Precio: ${carrito[m].precio}`);
    m++;
} while(m < carrito.length);

let n = 0;
do {
    if(n === 3) {
        console.log('Se detuvo la ejecución en el índice 3');
        break; // exit the loop when n is 3
    }
    console.log(carrito[n].nombre);
    n++;
} while(n < carrito.length);

// Note: In a do-while loop, the condition is checked after the loop body is executed, so the loop will always run at least once.

// Run at least once example
let p = 10;
do {
    console.log(`El valor de p es: ${p}`);
    p++;
} while(p < 5); // This condition is false, but the loop runs once