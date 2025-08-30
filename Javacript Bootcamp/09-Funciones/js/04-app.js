// functions vs methods
const myFunction = function() {
  console.log("Hello from a function!");
}

const myObject = {
  myMethod: function() {
    console.log("Hello from a method!");
  }
}

// functions are standalone
myFunction(); // "Hello from a function!"

// methods are called on objects
myObject.myMethod(); // "Hello from a method!"