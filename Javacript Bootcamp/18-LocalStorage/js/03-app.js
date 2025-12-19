// Delete Elements from LocalStorage
localStorage.removeItem('name');
localStorage.removeItem('age');

// Verify Deletion
const name = localStorage.getItem('name');
const age = localStorage.getItem('age');
console.log(`After Deletion - Name: ${name}, Age: ${age}`);

// Update LocalStorage with New Values
localStorage.setItem('name', 'Jane Smith');
localStorage.setItem('age', '25');

// Verify New Values
const newName = localStorage.getItem('name');
const newAge = localStorage.getItem('age');
console.log(`Updated - Name: ${newName}, Age: ${newAge}`);

// Note: This code assumes that 'name' and 'age' were previously set in LocalStorage.

// Update existing values in LocalStorage
localStorage.setItem('name', 'Jane Smith');
localStorage.setItem('age', '25');

// Retrieve and log updated values
const updatedName = localStorage.getItem('name');
const updatedAge = localStorage.getItem('age');
console.log(`Updated - Name: ${updatedName}, Age: ${updatedAge}`);
