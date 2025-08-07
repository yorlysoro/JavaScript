const nombre = "Fernando";
let apellido = "Herrera";

console.log(`Hola, ${nombre} ${apellido}`);

let valorDado = 5;
console.log(valorDado);

if (true) {
    let valorDado = 4;
    console.log(valorDado);
}

console.log(valorDado);
//Template Strings
console.log(`Hola, ${nombre} ${apellido}`);

function getSaludo(nombre) {
    return `Hola, ${nombre}`;
}
console.log(getSaludo(nombre));

//objetos literales
const persona = {
    nombre: "Tony",
    apellido: "Stark",
    edad: 45,
    direccion: {
        ciudad: "New York",
        zip: 123456,
        lat: 14.123,
        lng: 34.123
    }
};

console.log(persona);

const persona2 = { ...persona };
persona2.nombre = "Peter";
console.log(persona2);
console.log(persona);

// Arreglos
const arreglo = [1, 2, 3, 4];
let arreglo2 = [...arreglo, 5];
console.log(arreglo);
console.log(arreglo2);

// array map
const arregloMap = arreglo.map(function (numero) {
    return numero * 2;
});
console.log(arregloMap);

// new array map with arrow function
const arregloMap2 = arreglo.map(numero => numero * 2);
console.log(arregloMap2);

// push and pop
arreglo2.push(6);
console.log(arreglo2);
arreglo2.pop();
console.log(arreglo2);

//indexOf
const index = arreglo2.indexOf(3);
console.log(index);

// includes
const includes = arreglo2.includes(3);
console.log(includes);

// functions
const saludar = (nombre) => {
    return `Hola, ${nombre}`;
}
console.log(saludar("Goku"));

// Arrow function with implicit return
const saludar2 = (nombre) => `Hola, ${nombre}`;
console.log(saludar2("Vegeta"));

const getUser = () => ({
    uid: "ABC123",
    username: "El_Papi1502"
});
console.log(getUser());

// destructuring
const usuario = {
    uid: "ABC123",
    username: "El_Papi1502",
    age: 35,
    country: "USA"
};

const { username, uid } = usuario;
console.log(username, uid);
// destructuring in function parameters
const getUser2 = ({ uid, username }) => {
    return {
        uid,
        username
    };
}
console.log(getUser2(usuario));

// getContext (renamed to avoid React Hook naming conflict)
const getContext = (state) => {
    const { uid, username } = state;
    return {
        uid,
        username
    };
}
const state = {
    uid: "ABC123",
    username: "El_Papi1502",
    age: 35,
    country: "USA"
};
const { uid: userId, username: userName } = getContext(state);
console.log(userId, userName);

// Destructuring arrays
const fruits = ["Apple", "Banana", "Cherry"];
const [firstFruit, secondFruit] = fruits;
console.log(firstFruit, secondFruit);
// Destructuring with default values
const [first = "Orange", second = "Grapes"] = fruits;
console.log(first, second);
// Spread operator with arrays
const moreFruits = [...fruits, "Mango", "Pineapple"];
console.log(moreFruits);
// Rest operator in function parameters
const sum = (...numbers) => {
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // Output: 15
// Rest operator with destructuring
const [firstNum, ...restNums] = [1, 2, 3, 4, 5];
console.log(firstNum, restNums); // Output: 1 [2, 3, 4, 5]