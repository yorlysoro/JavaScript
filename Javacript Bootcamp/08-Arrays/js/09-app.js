// iter arrays
const frutas = ['manzana', 'banana', 'naranja'];
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

// forEach
frutas.forEach(function(fruta) {
  console.log(fruta);
});

// for...of
for (const fruta of frutas) {
  console.log(fruta);
}

// map
const longitudes = frutas.map(function(fruta) {
  return fruta.length;
});
console.log(longitudes);