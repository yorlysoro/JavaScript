// scroll event
window.addEventListener('scroll', function() {
    console.log('The page is being scrolled');
    scrollPX = window.scrollY;
    console.log('Scroll position in pixels:', scrollPX);
    // is up or down
    if (this.oldScroll > this.scrollY) {
        console.log('Scrolling up');
    } else {
        console.log('Scrolling down');
    }
    this.oldScroll = this.scrollY;

    const location  = document.getElementById('location');
    location.textContent = `Scroll Y: ${scrollPX}px`;

});