// getElementById
const header = document.getElementById('main-header');
header.style.borderBottom = 'solid 4px #000';

const title = document.getElementById('title');
title.textContent = 'Hello World';
title.style.color = 'blue';
title.style.fontWeight = 'bold';

const items = document.getElementById('items');
items.style.backgroundColor = '#f4f4f4';

console.log(header);
console.log(title);
console.log(items);

const formulario = document.getElementById('formulario');
console.log(formulario);

const noExiste = document.getElementById('no-existe');
console.log(noExiste);