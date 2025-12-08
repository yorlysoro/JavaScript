// Example of advanced DOM manipulation

const contentDiv = document.getElementById('content');

const heading = document.createElement('h1');
heading.textContent = 'Dynamic DOM Manipulation with JavaScript';
contentDiv.appendChild(heading);

const description = document.createElement('p');
description.textContent = 'This paragraph was created and added to the DOM using JavaScript.';
contentDiv.appendChild(description);

const list = document.createElement('ul');
const items = ['Dynamic Item 1', 'Dynamic Item 2', 'Dynamic Item 3'];

items.forEach(itemText => {
    const listItem = document.createElement('li');
    listItem.textContent = itemText;
    list.appendChild(listItem);
});

contentDiv.appendChild(list);

console.log(contentDiv);

// setAttribute and getAttribute example
const link = document.createElement('a');
link.setAttribute('href', 'https://www.example.com');
link.setAttribute('target', '_blank');
link.textContent = 'Go to Example.com';

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
        color: #2c3e50;
    }
    #content p {
        font-size: 16px;
        color: #34495e;
    }
    #content ul {
        list-style-type: square;
        padding-left: 20px;
    }
    #content a {
        color: #2980b9;
        text-decoration: none;
    }
    #content a:hover {
        text-decoration: underline;
    }
`;
document.head.appendChild(style);
