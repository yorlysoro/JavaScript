//querySelectorAll
const titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent = 'Hello World';

const items = document.querySelectorAll('.list-group-item');
items.forEach((item, index) => {
  item.textContent = `Item ${index + 1}`;
});

const oddItems = document.querySelectorAll('.list-group-item:nth-child(odd)');
oddItems.forEach(item => {
  item.style.backgroundColor = '#f4f4f4';
});

const evenItems = document.querySelectorAll('.list-group-item:nth-child(even)');
evenItems.forEach(item => {
  item.style.backgroundColor = '#ccc';
});

console.log(items);
console.log(oddItems);
console.log(evenItems);

// Select all input elements and set their values
const inputs = document.querySelectorAll('input');
inputs.forEach((input, index) => {
  input.value = `Input ${index + 1}`;
});

console.log(inputs);