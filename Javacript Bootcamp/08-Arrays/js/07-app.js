// Splice for delete elements in array
const frutas = ['manzana', 'banana', 'naranja', 'uva', 'kiwi'];
frutas.splice(2, 1);
console.log(frutas);

// Delete the last element
frutas.splice(-1, 1);
console.log(frutas);

// Delete the first element
frutas.splice(0, 1);
console.log(frutas);

// Delete uva
frutas.splice(2, 1);
console.log(frutas);

// Delete all elements
frutas.splice(0, frutas.length);
console.log(frutas);

// Delete with pop
frutas.pop();
console.log(frutas);

// Delete with shift
frutas.shift();
console.log(frutas);


// Delete with unshift
frutas.unshift('fresa');
console.log(frutas);

