var width = document.querySelector('#width');
var windowWidth = window.innerWidth;
width.addEventListener('change', function(){
    width.text(windowWidth);
});
