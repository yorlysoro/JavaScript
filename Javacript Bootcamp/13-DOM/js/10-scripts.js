//Generate HTML content using JavaScript
const contentDiv = document.getElementById('content');

const heading = document.createElement('h1');
heading.textContent = 'Welcome to the JavaScript DOM Manipulation!';
contentDiv.appendChild(heading);

const description = document.createElement('p');
description.textContent = 'This content was generated and added to the DOM using JavaScript.';
contentDiv.appendChild(description);

const list = document.createElement('ul');
const items = ['Item 1', 'Item 2', 'Item 3'];

items.forEach(itemText => {
    const listItem = document.createElement('li');
    listItem.textContent = itemText;
    list.appendChild(listItem);
});

contentDiv.appendChild(list);

console.log(contentDiv);

// setAttribute and getAttribute
const link = document.createElement('a');
link.setAttribute('href', 'https://www.example.com');
link.setAttribute('target', '_blank');
link.textContent = 'Visit Example.com';

contentDiv.appendChild(link);

console.log('Link href:', link.getAttribute('href'));
console.log('Link target:', link.getAttribute('target'));

// Adding styles dynamically
const style = document.createElement('style');
style.textContent = `
    #content {
        font-family: Arial, sans-serif;
        margin: 20px;
    }
    #content h1 {
        color: #333;
    }
    #content p {
        font-size: 16px;
        color: #666;
    }
    #content ul {
        list-style-type: disc;
        padding-left: 20px;
    }
    #content a {
        color: blue;
        text-decoration: none;
    }
    #content a:hover {
        text-decoration: underline;
    }
`;
document.head.appendChild(style);

console.log('Styles added to the document.');

// create a p element and set multiple attributes
const newParagraph = document.createElement('p');
newParagraph.setAttribute('id', 'new-paragraph');
newParagraph.setAttribute('class', 'text-muted');
newParagraph.textContent = 'This is a new paragraph with multiple attributes set.';
contentDiv.appendChild(newParagraph);

console.log(newParagraph);

// Event listener to change paragraph text on click
newParagraph.addEventListener('click', () => {
    newParagraph.textContent = 'The paragraph text has been changed after clicking!';
});

console.log('Event listener added to the new paragraph.');

// create div element with nested elements
const cardDiv = document.createElement('div');
cardDiv.setAttribute('class', 'card');

const cardTitle = document.createElement('h2');
cardTitle.textContent = 'Card Title';
cardDiv.appendChild(cardTitle);

const cardBody = document.createElement('p');
cardBody.textContent = 'This is the body of the card. It contains some sample text.';
cardDiv.appendChild(cardBody);

contentDiv.appendChild(cardDiv);

console.log(cardDiv);

// create image element and set attributes
const image = document.createElement('img');
image.setAttribute('src', 'https://via.placeholder.com/150');
image.setAttribute('alt', 'Placeholder Image');
image.setAttribute('width', '150');
image.setAttribute('height', '150');

contentDiv.appendChild(image);

console.log(image);

// Add hover effect to the image
image.addEventListener('mouseover', () => {
    image.style.border = '2px solid blue';
});

image.addEventListener('mouseout', () => {
    image.style.border = 'none';
});

console.log('Hover effect added to the image.');

