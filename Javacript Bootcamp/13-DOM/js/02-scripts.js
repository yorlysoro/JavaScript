// getElementsByClassName
const items = document.getElementsByClassName('collection-item');
console.log(items);
console.log(items[0]);
items[0].style.color = 'red';
items[3].textContent = 'Hello World';

// Convert HTMLCollection to array
const itemsArray = Array.from(items);
itemsArray.reverse();

itemsArray.forEach(function(item, index) {
  console.log(item.className);
  item.textContent = `${index}: Hello`;
});
console.log(itemsArray);

const header = document.getElementsByClassName('header');
console.log(header);

const hero = document.getElementsByClassName('hero');
console.log(hero);

const contenedores = document.getElementsByClassName('container');
console.log(contenedores);

const noExiste = document.getElementsByClassName('no-existe');
console.log(noExiste);