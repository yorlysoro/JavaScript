// Mouse Events
const mouseBox = document.getElementById('mouse-box');

mouseBox.addEventListener('click', function() {
    console.log('Mouse clicked inside the box');
});

mouseBox.addEventListener('dblclick', function() {
    console.log('Mouse double-clicked inside the box');
});

mouseBox.addEventListener('mouseover', function() {
    console.log('Mouse entered the box');
});

mouseBox.addEventListener('mouseout', function() {
    console.log('Mouse left the box');
});

// Right-click mouse event
mouseBox.addEventListener('contextmenu', function(event) {
    event.preventDefault(); // Prevent the default context menu from appearing
    console.log('Right-click detected inside the box');
});

// mousedown and mouseup events
mouseBox.addEventListener('mousedown', function() {
    console.log('Mouse button pressed down inside the box');
});

mouseBox.addEventListener('mouseup', function() {
    console.log('Mouse button released inside the box');
});