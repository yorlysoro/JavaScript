// Spread operator para copiar arreglos
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Usar el spread operator para crear una copia del arreglo carrito
const carritoCopia = [...carrito];

// Modificar la copia para demostrar que es independiente del original
carritoCopia.push({ nombre: 'Smartwatch', precio: 250 });

console.log('Carrito original:', carrito);
console.log('Copia del carrito con nuevo producto:', carritoCopia);
// Output:
// Carrito original: [ { nombre: 'Monitor 27 Pulgadas', precio: 500 }, ... ]
// Copia del carrito con nuevo producto: [ { nombre: 'Monitor 27 Pulgadas', precio: 500 }, ..., { nombre: 'Smartwatch', precio: 250 } ]
// Nota: El carrito original no se ve afectado por los cambios en la copia.

// Spread operator para combinar arreglos
const frutas = ['Manzana', 'Banana', 'Cereza'];
const verduras = ['Lechuga', 'Tomate', 'Zanahoria'];

// Usar el spread operator para combinar ambos arreglos
const alimentos = [...frutas, ...verduras];

console.log('Alimentos combinados:', alimentos);
// Output: Alimentos combinados: [ 'Manzana', 'Banana', 'Cereza', 'Lechuga', 'Tomate', 'Zanahoria' ]
// Nota: El arreglo alimentos contiene elementos de ambos arreglos originales.

// Spread operator para pasar elementos como argumentos
const numeros = [4, 2, 8, 6, 10];

// Usar el spread operator para pasar los elementos del arreglo como argumentos a Math.max
const maximo = Math.max(...numeros);

console.log('Número máximo usando spread operator:', maximo);
// Output: Número máximo usando spread operator: 10
// Nota: Math.max recibe los elementos del arreglo numeros como argumentos individuales.

// Spread operator para dividir una cadena en caracteres
const palabra = 'JavaScript';

// Usar el spread operator para dividir la cadena en un arreglo de caracteres
const caracteres = [...palabra];

console.log('Caracteres de la palabra usando spread operator:', caracteres);
// Output: Caracteres de la palabra usando spread operator: [ 'J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't' ]
// Nota: El arreglo caracteres contiene cada letra de la palabra como un elemento separado.

// Spread operator para combinar objetos
const objeto1 = { a: 1, b: 2 };
const objeto2 = { c: 3, d: 4 };

// Usar el spread operator para combinar ambos objetos
const objetoCombinado = { ...objeto1, ...objeto2 };

console.log('Objeto combinado usando spread operator:', objetoCombinado);
// Output: Objeto combinado usando spread operator: { a: 1, b: 2, c: 3, d: 4 }
// Nota: El objeto combinado contiene propiedades de ambos objetos originales.

// Spread operator para clonar un objeto
const objetoOriginal = { x: 10, y: 20 };

// Usar el spread operator para crear una copia del objeto original
const objetoClonado = { ...objetoOriginal };

// Modificar la copia para demostrar que es independiente del original
objetoClonado.z = 30;

console.log('Objeto original:', objetoOriginal);
console.log('Objeto clonado con nueva propiedad:', objetoClonado);
// Output:
// Objeto original: { x: 10, y: 20 }
// Objeto clonado con nueva propiedad: { x: 10, y: 20, z: 30 }
// Nota: El objeto original no se ve afectado por los cambios en la copia.

// Spread operator para funciones con múltiples argumentos
function sumar(a, b, c) {
    return a + b + c;
}

const numerosParaSumar = [5, 10, 15];

// Usar el spread operator para pasar los elementos del arreglo como argumentos a la función sumar
const resultadoSuma = sumar(...numerosParaSumar);

console.log('Resultado de la suma usando spread operator:', resultadoSuma);
// Output: Resultado de la suma usando spread operator: 30
// Nota: La función sumar recibe los elementos del arreglo numerosParaSumar como argumentos individuales.

// Spread operator para arrays multidimensionales
const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Usar el spread operator para aplanar la matriz en un solo arreglo
const matrizAplanada = [].concat(...matriz);

console.log('Matriz aplanada usando spread operator:', matrizAplanada);
// Output: Matriz aplanada usando spread operator: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// Nota: El arreglo matrizAplanada contiene todos los elementos de la matriz original en un solo nivel.

// Spread operator para combinar múltiples arreglos
const arregloA = [1, 2];
const arregloB = [3, 4];
const arregloC = [5, 6];

// Usar el spread operator para combinar varios arreglos en uno solo
const arregloCombinado = [...arregloA, ...arregloB, ...arregloC];

console.log('Arreglo combinado usando spread operator:', arregloCombinado);
// Output: Arreglo combinado usando spread operator: [ 1, 2, 3, 4, 5, 6 ]
// Nota: El arreglo combinado contiene elementos de todos los arreglos originales.

// Spread operator para actualizar propiedades de un objeto
const usuario = {
    nombre: 'Juan',
    edad: 30,
    ciudad: 'Madrid'
};

// Usar el spread operator para crear una copia del objeto y actualizar la edad
const usuarioActualizado = { ...usuario, edad: 31 };

console.log('Usuario original:', usuario);
console.log('Usuario actualizado usando spread operator:', usuarioActualizado);
// Output:
// Usuario original: { nombre: 'Juan', edad: 30, ciudad: 'Madrid' }
// Usuario actualizado usando spread operator: { nombre: 'Juan', edad: 31, ciudad: 'Madrid' }
// Nota: El objeto usuario original no se ve afectado por los cambios en la copia.

// Spread operator para dividir un string en un arreglo de palabras
const frase = 'El spread operator es muy útil';

// Usar el spread operator junto con split para dividir la frase en palabras
const palabras = [...frase.split(' ')];

console.log('Palabras de la frase usando spread operator:', palabras);
// Output: Palabras de la frase usando spread operator: [ 'El', 'spread', 'operator', 'es', 'muy', 'útil' ]
// Nota: El arreglo palabras contiene cada palabra de la frase como un elemento separado.

// Spread operator para combinar arreglos y agregar nuevos elementos
const colores = ['Rojo', 'Verde', 'Azul'];

// Usar el spread operator para agregar nuevos colores al arreglo existente
const coloresActualizados = ['Amarillo', ...colores, 'Morado'];

console.log('Colores actualizados usando spread operator:', coloresActualizados);
// Output: Colores actualizados usando spread operator: [ 'Amarillo', 'Rojo', 'Verde', 'Azul', 'Morado' ]
// Nota: El arreglo colores original no se ve afectado por los cambios en la copia.

// Spread operator para crear un nuevo arreglo a partir de uno existente con modificaciones
const numerosOriginales = [10, 20, 30];

// Usar el spread operator para crear una copia y modificar un elemento
const numerosModificados = [...numerosOriginales];
numerosModificados[1] = 25;

console.log('Números originales:', numerosOriginales);
console.log('Números modificados usando spread operator:', numerosModificados);
// Output:
// Números originales: [ 10, 20, 30 ]
// Números modificados usando spread operator: [ 10, 25, 30 ]
// Nota: El arreglo numerosOriginales no se ve afectado por los cambios en la copia.

// Spread operator para combinar arreglos de objetos
const productosA = [
    { id: 1, nombre: 'Producto A1' },
    { id: 2, nombre: 'Producto A2' }
];

const productosB = [
    { id: 3, nombre: 'Producto B1' },
    { id: 4, nombre: 'Producto B2' }
];

// Usar el spread operator para combinar ambos arreglos de objetos
const todosLosProductos = [...productosA, ...productosB];

console.log('Todos los productos usando spread operator:', todosLosProductos);
// Output: Todos los productos usando spread operator: [ { id: 1, nombre: 'Producto A1' }, ..., { id: 4, nombre: 'Producto B2' } ]
// Nota: El arreglo todosLosProductos contiene objetos de ambos arreglos originales.
// Spread operator para crear un arreglo de números únicos
const numerosConDuplicados = [1, 2, 2, 3, 4, 4, 5];

// Usar el spread operator junto con Set para crear un arreglo de números únicos
const numerosUnicos = [...new Set(numerosConDuplicados)];

console.log('Números únicos usando spread operator:', numerosUnicos);
// Output: Números únicos usando spread operator: [ 1, 2, 3, 4, 5 ]
// Nota: El arreglo numerosUnicos contiene solo números únicos sin duplicados.
// Spread operator para combinar arreglos y eliminar un elemento
const letras = ['A', 'B', 'C', 'D', 'E'];

// Usar el spread operator para crear un nuevo arreglo sin la letra 'C'
const letrasSinC = [...letras.filter(letra => letra !== 'C')];

console.log('Letras sin C usando spread operator:', letrasSinC);
// Output: Letras sin C usando spread operator: [ 'A', 'B', 'D', 'E' ]
// Nota: El arreglo letras original no se ve afectado por los cambios en la copia.

// Spread operator para combinar arreglos y agregar elementos al inicio y al final
const diasLaborales = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];

// Usar el spread operator para agregar 'Domingo' al inicio y 'Sábado' al final
const semanaCompleta = ['Domingo', ...diasLaborales, 'Sábado'];

console.log('Semana completa usando spread operator:', semanaCompleta);
// Output: Semana completa usando spread operator: [ 'Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado' ]
// Nota: El arreglo diasLaborales original no se ve afectado por los cambios en la copia.

// Spread operator para combinar arreglos de diferentes tipos de datos
const numerosMixtos = [1, 2, 3];
const letrasMixtas = ['A', 'B', 'C'];
const booleanosMixtos = [true, false];

// Usar el spread operator para combinar todos los arreglos en uno solo
const combinadoMixto = [...numerosMixtos, ...letrasMixtas, ...booleanosMixtos];

console.log('Arreglo combinado mixto usando spread operator:', combinadoMixto);
// Output: Arreglo combinado mixto usando spread operator: [ 1, 2, 3, 'A', 'B', 'C', true, false ]
// Nota: El arreglo combinadoMixto contiene elementos de diferentes tipos de datos.