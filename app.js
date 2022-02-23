function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
    
    if (!isMobile()) {
    document.write('<script src="app.js"></script>');
    }

let stars = document.getElementById("stars");   
let sun = document.getElementById("sun");
let moon = document.getElementById("moon");
let mountains_behind = document.getElementById("mountains_behind");   
let mountains_front = document.getElementById("mountains_front");
let text = document.getElementById("text");

window.addEventListener('scroll',function(){
    let value = window.scrollY;
    stars.style.top= value * 0.2 + 'px';
    mountains_front.style.left = value * 0.3 + 'px';
    mountains_front.style.bottom = value * 0.7 + 'px';
    moon.style.top= value * 0.1 + 'px';
})