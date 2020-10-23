let loaderContainer = document.querySelector('.loader-container');
let loader = document.querySelector('.loader');
let sectionLeft = document.querySelector('.loading-section-left');
let sectionRight = document.querySelector('.loading-section-right');
let title = document.querySelector('.loading-title');

title.innerHTML = '';

let delay = 30;
let i = 0;
let repeatNum = 1;
let repeat = 1;

let text = "Musée d'Aquitaine";
let writingDelay = 100;
let k = 0;

window.addEventListener('load', () => {
    loadingAnimation();
    disableScroll();
    writeText();
});


function writeText() {
    if (k < text.length) {
        title.innerHTML += text.charAt(k);
        k++;
        setTimeout(writeText, writingDelay);
    }
}

//Fonction très moche mais ça marche.
function loadingAnimation() {
    writeText();
    if(i < 48 && repeatNum <= repeat) {
        setTimeout(() => {
            i++;
            loop(i);
            loadingAnimation();
        }, delay);
    }else if (repeatNum >= repeat) {
        setTimeout(()=> openSection(), 300);
    }else {
        repeatNum++;
        i = 0;
        loadingAnimation();
    }
}

function loop(i) {
    loaderContainer.innerHTML += `<img class="loader" src="img/loading/${i}.png" id="${i}">`;
    setTimeout(function () { 
        document.getElementById(`${i}`) ? document.getElementById(`${i}`).remove() : false;
    }, delay * 3);
}

function openSection() {
    sectionLeft.style.width = '0';
    sectionRight.style.width = '0';
    title.style.display = 'none';
    enableScroll();
    setTimeout(() => {
        sectionLeft.style.display = 'none';
        sectionRight.style.display = 'none';
        loaderContainer.style.display = 'none';
    }, 900);
}

function disableScroll() { 
    document.body.classList.add("stop-scrolling");
} 
  
function enableScroll() { 
    document.body.classList.remove("stop-scrolling");
} 