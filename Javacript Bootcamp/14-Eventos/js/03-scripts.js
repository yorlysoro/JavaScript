// Input Events
const inputBox = document.getElementById('input-box');

inputBox.addEventListener('focus', function() {
    console.log('Input box focused');
});

inputBox.addEventListener('blur', function() {
    console.log('Input box lost focus');
});

inputBox.addEventListener('input', function() {
    console.log('Input box value changed to:', inputBox.value);
});

inputBox.addEventListener('change', function() {
    console.log('Input box value finalized to:', inputBox.value);
});

// Keyboard Events
inputBox.addEventListener('keydown', function(event) {
    console.log('Key down:', event.key);
});

inputBox.addEventListener('keyup', function(event) {
    console.log('Key up:', event.key);
});

inputBox.addEventListener('keypress', function(event) {
    console.log('Key press:', event.key);
});