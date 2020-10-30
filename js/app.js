let background = document.querySelector('.background');

let lFollowX = 0;
let lFollowY = 0;
let x = 0;
let y = 0;
let friction = 1 / 10;

window.addEventListener("mousemove", moveBackground);

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

//Collection "carousel"
let collectionElement = document.querySelectorAll('.collection-section');

collectionElement.forEach((item, index) => {
    item.addEventListener('click', () => {
        switchSection(item, index);
    });
});

function switchSection(item, index) {
    let sectionNum = index+1 >= collectionElement.length ? 0 : index+1;
    item.classList.add('collection-section-disabled');
    collectionElement[sectionNum].classList.remove('collection-section-disabled');

}


