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