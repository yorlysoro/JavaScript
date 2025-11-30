const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// some method
const existe = meses.some( mes => mes === 'Enero' );
console.log(existe);

const existe2 = carrito.some( producto => producto.nombre === 'Celular' );
console.log(existe2);

// includes method
const meses2 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const incluye = meses2.includes('Diciembre');
console.log(incluye);