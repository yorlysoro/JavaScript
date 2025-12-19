// LocalStorage API

// Set item
localStorage.setItem('name', 'John Doe');
localStorage.setItem('age', '30');

// Get item
const name = localStorage.getItem('name');
const age = localStorage.getItem('age');
console.log(`Name: ${name}, Age: ${age}`);

// Remove item
localStorage.removeItem('age');

// Clear all items
// localStorage.clear();

// Check remaining items
const remainingName = localStorage.getItem('name');
const remainingAge = localStorage.getItem('age');
console.log(`Remaining - Name: ${remainingName}, Age: ${remainingAge}`);