// Object literal
const person = {
  firstName: "Tony",
  lastName: "Stark",
  age: 45,
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
    lat: 40.7128,
    lng: -74.0060
  }
}; // as const;

console.log(person);

const person2 = {...person};

person2.firstName = "Steve";
console.log(person2);