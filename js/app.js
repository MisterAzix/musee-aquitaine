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
    //changeBackground();
});

function moveBackground(e) {
    let lMouseX = Math.max(-100, Math.min(100, window.innerWidth / 2 - e.clientX));
    let lMouseY = Math.max(-100, Math.min(100, window.innerHeight / 2 - e.clientY));
    lFollowX = (100 * lMouseX) / 100;
    lFollowY = (50 * lMouseY) / 100;
    x = (lFollowX - x) * friction;
    y = (lFollowY - y) * friction;
    background.style.transition = '.3s'
    background.style.transform = 'translate(' + x + 'px, ' + y + 'px) scale(1.05)';
    //console.log(`lMouseX : ${lMouseX}, lFollowX : ${lFollowX}, x : ${x} - lMouseY : ${lMouseY}, lFollowY : ${lFollowY}, y : ${y}`)
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


//Collection "carousel"
//.collection-section-disabled

let collectionElement = document.querySelectorAll('.collection-section');

collectionElement.forEach((item, index) => {
    item.addEventListener('click', () => {
        switchSection(item, index);
    });
});

//console.log(collectionElement);

function switchSection(item, index) {
    let sectionNum = index+1 >= collectionElement.length ? 0 : index+1;
    item.classList.add('collection-section-disabled');
    collectionElement[sectionNum].classList.remove('collection-section-disabled');

}


