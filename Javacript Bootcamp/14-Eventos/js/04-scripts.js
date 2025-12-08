//submit event
const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    console.log('Form submitted');
});