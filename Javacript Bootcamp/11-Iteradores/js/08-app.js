// for in loop 
const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

for(let indice in pendientes) {
    console.log(indice); // logs the index
    console.log(pendientes[indice]); // logs the value at that index
}

const carrito = [
    { nombre: 'Monitor 20 pulgadas', precio: 500 },
    { nombre: 'Televisión 50 pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audífonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500 },
];

for(let indice in carrito) {
    console.log(`Producto: ${carrito[indice].nombre} - Precio: ${carrito[indice].precio}`);
}

// length of carrito array using for in loop
let total = 0;
for(let indice in carrito) {
    total += carrito[indice].precio;
}
console.log(`Total a pagar: ${total}`);

// For in Continue and Break example
for(let indice in carrito) {
    if(carrito[indice].precio > 400) {
        console.log(`Omitiendo producto: ${carrito[indice].nombre} - Precio: ${carrito[indice].precio}`);
        continue; // skip products with price greater than 400
    }
    console.log(`Producto: ${carrito[indice].nombre} - Precio: ${carrito[indice].precio}`);
}

for(let indice in carrito) {
    if(indice == 3) {
        console.log('Se detuvo la ejecución en el índice 3');
        break; // exit the loop when index is 3
    }
    console.log(carrito[indice].nombre);
}

// Note: The for...in loop is generally used for iterating over object properties, but it can also be used with arrays to get the indices. However, it's not recommended for arrays due to potential issues with inherited properties and the order of iteration.

const automovil = {
    modelo: 'Mustang',
    motor: 5.0,
    anio: 2020,
    marca: 'Ford'
}

for(let [clave, valor] in automovil) {
    console.log(`${clave}: ${valor}`);
}

// Note: The above destructuring in for...in loop does not work as intended. The correct way to iterate over object properties is shown below: