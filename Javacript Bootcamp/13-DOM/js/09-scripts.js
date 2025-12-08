// Delete elements
const ul = document.querySelector('ul');
const items = ul.querySelectorAll('li');

// Remove the last item
ul.removeChild(items[items.length - 1]);

// Remove the first item
ul.removeChild(items[0]);

console.log(ul);

// Clear all items
ul.innerHTML = '';

console.log(ul);

