// QuerySelector 
const header = document.querySelector('h1');
header.style.borderBottom = 'solid 4px #000';

const title = document.querySelector('#title');
title.textContent = 'Hello World';
title.style.color = 'blue';
title.style.fontWeight = 'bold';

const items = document.querySelector('#items');
items.style.backgroundColor = '#f4f4f4';

console.log(header);
console.log(title);
console.log(items);

const formulario = document.querySelector('#formulario');
console.log(formulario);

const noExiste = document.querySelector('#no-existe');
console.log(noExiste);

// select child elements
const firstItem = document.querySelector('.list-group-item');
firstItem.style.color = 'red';

const lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue';

const secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'green';

console.log(firstItem);
console.log(lastItem);
console.log(secondItem);

// Select html element
const input = document.querySelector('input');
input.value = 'Hello World';

const submit = document.querySelector('input[type="submit"]');
submit.value = 'SEND';

console.log(input);
console.log(submit);