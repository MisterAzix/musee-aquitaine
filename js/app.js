let background = document.querySelector('.background');
let topWeel = document.querySelector('.top-weel');
let bottomWeel = document.querySelector('.bottom-weel');

let section1 = document.querySelector('.exposition');
let section2 = document.querySelector('.activity');

let lFollowX = 0;
let lFollowY = 0;
let x = 0;
let y = 0;
let friction = 1 / 10;

window.addEventListener("mousemove", moveBackground);
window.addEventListener("scroll", function() {
    scrollRotate(); 
    changeBackground();
});

function moveBackground(e) {
    let lMouseX = Math.max(-100, Math.min(100, window.innerWidth / 2 - e.clientX));
    let lMouseY = Math.max(-100, Math.min(100, window.innerHeight / 2 - e.clientY));
    lFollowX = (20 * lMouseX) / 100;
    lFollowY = (10 * lMouseY) / 100;
    x = (lFollowX - x) * friction;
    y = (lFollowY - y) * friction;
    background.style.transform = 'translate(' + x + 'px, ' + y + 'px) scale(1.05)';
}

function scrollRotate() {
    topWeel.style.transform = "rotate("+ (window.pageYOffset/5) + "deg)";
    bottomWeel.style.transform = "rotate(-"+ (window.pageYOffset/15) + "deg)";
}

function changeBackground() {
    if(section2.getBoundingClientRect().top <= 0) {
        background.style.background = 'url(\'../img/background_3.jpg\') no-repeat center center';
        background.style.backgroundSize = 'cover';
    }else if(section1.getBoundingClientRect().top <= 0) {
        background.style.background = 'url(\'../img/background_2.jpg\') no-repeat center center';
        background.style.backgroundSize = 'cover';
    }else {
        background.style.background = 'url(\'../img/background_1.jpg\') no-repeat center center';
        background.style.backgroundSize = 'cover';
    }
}