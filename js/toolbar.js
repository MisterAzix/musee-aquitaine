//Get buttons elements
let ticketButton = document.getElementById('ticket-button');
let infoButton = document.getElementById('info-button');
let agendaButton = document.getElementById('agenda-button');
let searchButton = document.getElementById('search-button');

//Get close button
let closeButton = document.querySelectorAll('.close-button');

//Get panels elements
let ticketPanel = document.getElementById('billetterie');
let infoPanel = document.getElementById('informations');
let agendaPanel = document.getElementById('agenda');
let searchPanel = document.getElementById('recherche');

//Other elements
let toolbar = document.querySelector('.toolbar-nav');
let overlay = document.querySelector('.black-overlay')
let body = document.querySelector('body');

//Other var
let openned = false;
let transition = '0.5s';

//Listen Event
ticketButton.addEventListener('click', function () { openNav('ticket'); });
infoButton.addEventListener('click', function () { openNav('info'); });
agendaButton.addEventListener('click', function () { openNav('agenda'); });
searchButton.addEventListener('click', function () { openNav('search'); });

overlay.addEventListener('click', close);
closeButton.forEach(btn => {
    btn.addEventListener('click', close);
});


function openNav(button) {
    if(!openned) {
        toolbar.style.right = '500px';
        overlay.style.display = 'block';
        overlay.style.opacity = '0.5';
        body.classList.add('body-pseudo-element');
    }
    transition = openned ? '0s' : '0.5s';
    closeNav();
    switch (button) {
        case 'ticket':
            resetTransistion();
            ticketPanel.style.transition = transition;
            ticketPanel.style.width = '500px';
            break;
        case 'info':
            resetTransistion();
            infoPanel.style.transition = transition;
            infoPanel.style.width = '500px';
            break;
        case 'agenda':
            resetTransistion();
            agendaPanel.style.transition = transition;
            agendaPanel.style.width = '500px';
            break;
        case 'search':
            resetTransistion();
            searchPanel.style.transition = transition;
            searchPanel.style.width = '500px';
            break;
        default:
            break;
    }
    openned = true;
}

function resetTransistion() {
    ticketPanel.style.transition = '0s';
    infoPanel.style.transition = '0s';
    agendaPanel.style.transition = '0s';
    searchPanel.style.transition = '0s';
}

function close() {
    closeNav();

    toolbar.style.right = '0px';
    overlay.style.opacity = '0';
    overlay.style.display = 'none';
    body.classList.remove('body-pseudo-element');

    ticketPanel.style.transition = '0.5s';
    infoPanel.style.transition = '0.5s';
    agendaPanel.style.transition = '0.5s';
    searchPanel.style.transition = '0.5s';
    openned = false;
}

function closeNav() {
    ticketPanel.style.width = '0px';
    infoPanel.style.width = '0px';
    agendaPanel.style.width = '0px';
    searchPanel.style.width = '0px';
}