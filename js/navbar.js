//Get elements
let langIcon = document.getElementById('lang-icon');
let accessibilityIcon = document.getElementById('accessibility-icon');

let langPanel = document.querySelector('.header-icon-lang');
let accessPanel = document.querySelector('.header-icon-accessibility');

let langOpenned = false;
let accessOpenned = false;

langIcon.addEventListener('click', editLangPanel);
accessibilityIcon.addEventListener('click', editAccessPanel);

function editLangPanel() {
    closeAccess()
    if(langOpenned) {
        langOpenned = false;
        closeLang();
    }else {
        langPanel.style.transform = 'scaleY(1)';
        langOpenned = true;
    }
}

function closeLang() {
    langPanel.style.transform = 'scaleY(0)';
    langOpenned = false;
}

function editAccessPanel() {
    closeLang()
    if(accessOpenned) {
        accessOpenned = false;
        closeAccess();
    }else {
        accessPanel.style.transform = 'scaleY(1)';
        accessOpenned = true;
    }
}

function closeAccess() {
    accessPanel.style.transform = 'scaleY(0)';
    accessOpenned = false;
}


//Hide navbar
let prevScrollpos = window.pageYOffset;
let navbar = document.getElementById("navbar");

window.onscroll = function() {
    if(!navbar) return;
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        navbar.style.top = "0";
    } else {
        navbar.style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
}