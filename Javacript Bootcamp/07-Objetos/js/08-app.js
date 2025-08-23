// destructuring objects

const persona = {
    nombre: 'Juan',
    edad: 30,
    profesion: 'Desarrollador'
}

const { nombre, edad, profesion } = persona;

console.log(nombre);
console.log(edad);
console.log(profesion);

// Objects inside objects
const persona2 = {
    nombre: 'Juan',
    edad: 30,
    profesion: 'Desarrollador',
    direccion: {
        calle: 'Calle Principal',
        numero: 123
    }
}



console.log(persona2.nombre);
console.log(persona2.edad);
console.log(persona2.profesion);
console.log(persona2.direccion.calle);
console.log(persona2.direccion.numero);

// Destructuring objects inside objects
const persona3 = {
    nombre: 'Juan',
    edad: 30,
    profesion: 'Desarrollador',
    direccion: {
        calle: 'Calle Principal',
        numero: 123
    }
}

const { nombre3, edad3, profesion3, direccion: { calle, numero } } = persona3;

console.log(nombre3);
console.log(edad3);
console.log(profesion3);
console.log(calle);
console.log(numero);

// use "strict mode"
"use strict";

// Objects problem
const person4 = {
  name: "John",
  age: 30,
  job: "Developer"
};

console.log(person4.name);
console.log(person4["age"]);

// override properties
person4.name = "Jane";
person4["age"] = 25;

console.log(person4);

//Freeze Objects
const person = {
  name: "John",
  age: 30,
  job: "Developer"
};

Object.freeze(person);

person.name = "Jane"; // This will not have any effect
person.age = 25;      // This will not have any effect

console.log(person);

//object is frozen
console.log(Object.isFrozen(person)); // true

// seal objects
Object.seal(person);
console.log(Object.isSealed(person)); // true

// copy 2 objects
const personCopy = { ...person };
console.log(personCopy);

// Using assign
const personAssign = Object.assign({}, person);
console.log(personAssign);

// Using keyword this
const personThis = {
  name: "John",
  age: 30,
  job: "Developer",
  getInfo: function() {
    return `${this.name} is ${this.age} years old and works as a ${this.job}.`;
  }
};

console.log(personThis.getInfo());

// Object constructor
function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.getInfo = function() {
    return `${this.name} is ${this.age} years old and works as a ${this.job}.`;
  };
}

const person4 = new Person("John", 30, "Developer");
console.log(person4.getInfo());

// Object .keys, .values, .entries
console.log(Object.keys(person4));
console.log(Object.values(person4));
console.log(Object.entries(person4));