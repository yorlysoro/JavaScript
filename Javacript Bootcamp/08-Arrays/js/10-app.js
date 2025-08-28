//Using map
const frutas = ['manzana', 'banana', 'naranja'];
const longitudes = frutas.map(function(fruta) {
  return fruta.length;
});
console.log(longitudes);

//Using filter
const frutas = ['manzana', 'banana', 'naranja'];
const frutasConA = frutas.filter(function(fruta) {
  return fruta.includes('a');
});
console.log(frutasConA);