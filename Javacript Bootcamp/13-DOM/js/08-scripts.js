// Traversing the DOM

const ul = document.querySelector('ul');

// Accessing parent element
console.log(ul.parentElement); // <body>...</body>

// Accessing child elements
console.log(ul.children); // HTMLCollection of <li> elements

// Accessing first and last child
console.log(ul.firstElementChild); // First <li> element
console.log(ul.lastElementChild); // Last <li> element

// Accessing sibling elements
const firstLi = ul.firstElementChild;
console.log(firstLi.nextElementSibling); // Second <li> element
console.log(firstLi.nextElementSibling.nextElementSibling); // Third <li> element
console.log(firstLi.nextElementSibling.previousElementSibling); // First <li> element again

// Modifying styles and classes
const h1 = document.querySelector('h1');
h1.style.color = 'blue';
h1.style.fontSize = '36px';
h1.style.textAlign = 'center';

// h1.classList.add('text-primary', 'text-center');
// h1.classList.remove('text-primary');

// h1.classList.toggle('text-center');
// h1.classList.toggle('text-center');

// console.log(h1.classList.contains('text-center'));

// setTimeout(() => {
//     h1.classList.toggle('text-center');
// }, 2000);

// Creating and appending new elements
const newLi = document.createElement('li');
newLi.textContent = 'New Item Added';
ul.appendChild(newLi);

console.log(ul);

// Removing an element
const secondLi = ul.children[1];
ul.removeChild(secondLi);

console.log(ul);

// Replacing an element
const thirdLi = ul.children[1];
const replacementLi = document.createElement('li');
replacementLi.textContent = 'Replacement Item';
ul.replaceChild(replacementLi, thirdLi);

console.log(ul);

// Inserting an element before another
const firstLiForInsert = ul.firstElementChild;
const insertedLi = document.createElement('li');
insertedLi.textContent = 'Inserted Item';
ul.insertBefore(insertedLi, firstLiForInsert);

console.log(ul);

// Cloning an element
const clonedLi = firstLiForInsert.cloneNode(true);
ul.appendChild(clonedLi);

console.log(ul);

// Using innerHTML to modify content
const container = document.getElementById('container');
container.innerHTML = `
    <h2>New Heading</h2>
    <p>This is a new paragraph added using innerHTML.</p>
`;

console.log(container);

// Event delegation example
document.body.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        alert(`You clicked on: ${event.target.textContent}`);
    }
});

// Adding styles dynamically
const style = document.createElement('style');
style.textContent = `
    .highlight {
        background-color: yellow;
        font-weight: bold;
    }
`;
document.head.appendChild(style);

// Toggling highlight class on list items when clicked
ul.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('highlight');
    }
});

// Logging final state of the list
console.log(ul);
// classList y manipulación de clases
const button = document.querySelector('button');

button.addEventListener('click', () => {
    ul.classList.toggle('highlight');
});

// Agregar estilos CSS para la clase 'highlight'
const buttonStyle = document.createElement('style');
buttonStyle.textContent = `
    .highlight {
        border: 2px solid red;
        background-color: yellow;
    }
`;
document.head.appendChild(buttonStyle);