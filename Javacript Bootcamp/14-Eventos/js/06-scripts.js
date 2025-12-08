// event bubbling
const parentBox = document.getElementById('parent-box');
const childBox = document.getElementById('child-box');

// Event listener for parent box
parentBox.addEventListener('click', function() {
    console.log('Parent box clicked');
});

// Event listener for child box
childBox.addEventListener('click', function(event) {
    event.stopPropagation(); // Stop the event from bubbling up to the parent
    console.log('Child box clicked');
});


