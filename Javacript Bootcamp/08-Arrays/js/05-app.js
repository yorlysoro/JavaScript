// Añade un elemento al final del array
const frutas = ['manzana', 'banana', 'naranja'];
frutas.push('uva');
console.log(frutas);

// añade un elemento al principio del array
frutas.unshift('fresa');
console.log(frutas);

// añade un elemento en una posición específica
frutas.splice(2, 0, 'kiwi');
console.log(frutas);