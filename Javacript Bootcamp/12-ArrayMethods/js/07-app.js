// Concat method
const arreglo1 = [1, 2, 3];
const arreglo2 = [4, 5, 6];

// Usar concat para unir dos arreglos
const arregloUnido = arreglo1.concat(arreglo2);
console.log('Arreglo unido usando concat:', arregloUnido);
// Output: Arreglo unido usando concat: [1, 2, 3, 4, 5, 6]

// Spread operator
const arreglo3 = [7, 8, 9];

// Usar el spread operator para unir dos arreglos
const arregloUnidoSpread = [...arreglo1, ...arreglo3];
console.log('Arreglo unido usando spread operator:', arregloUnidoSpread);
// Output: Arreglo unido usando spread operator: [1, 2, 3, 7, 8, 9]

// Comparación de ambos métodos
console.log('¿Son iguales los arreglos unidos?', JSON.stringify(arregloUnido) === JSON.stringify(arregloUnidoSpread));
// Output: ¿Son iguales los arreglos unidos? false
// Nota: Los arreglos unidos son diferentes ya que contienen diferentes elementos.