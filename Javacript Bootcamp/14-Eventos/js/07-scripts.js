// Event delegation
const list = document.getElementById('item-list');

// Event listener for the parent element
list.addEventListener('click', function(event) {
    // Check if the clicked element is a list item
    if (event.target && event.target.nodeName === 'LI') {
        console.log('List item clicked:', event.target.textContent);
    }
});

// prevent event bubbling with delegation
list.addEventListener('click', function(event) {
    if (event.target && event.target.nodeName === 'LI') {
        event.stopPropagation(); // Stop the event from bubbling up
        console.log('List item clicked with bubbling stopped:', event.target.textContent);
    }
});