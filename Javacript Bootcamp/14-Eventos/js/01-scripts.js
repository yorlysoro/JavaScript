// Detect when the page has fully loaded
window.addEventListener('load', function() {
    console.log('The page has fully loaded, including all stylesheets, images, and subframes.');
});

// Detect when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('The DOM is fully loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.');
});