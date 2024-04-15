window.addEventListener('scroll', function() {
    console.log('scrolling');
});
var scroll = window.requestAnimationFrame ||
    function(callback) { window.setTimeout(callback, 1000/60) };
var elementsToShow = document.querySelectorAll('.show-on-scroll');
