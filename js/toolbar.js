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

let openned = false;
let transition = '0.5s';


ticketButton.addEventListener('click', function () { openNav('ticket'); });
infoButton.addEventListener('click', function () { openNav('info'); });
agendaButton.addEventListener('click', function () { openNav('agenda'); });
searchButton.addEventListener('click', function () { openNav('search'); });

closeButton.forEach(btn => {
    btn.addEventListener('click', close);
});

function close() {
    console.log('ui');
    closeNav();
    openned = false;
}

function openNav(button) {
    openned?(transition = '0s'):(transition = '0.5s');
    closeNav();
    switch (button) {
        case 'ticket':
            ticketPanel.style.transition = transition;
            ticketPanel.style.width = '500px';
            break;
        case 'info':
            infoPanel.style.transition = transition;
            infoPanel.style.width = '500px';
            break;
        case 'agenda':
            agendaPanel.style.transition = transition;
            agendaPanel.style.width = '500px';
            break;
        case 'search':
            searchPanel.style.transition = transition;
            searchPanel.style.width = '500px';
            break;
        default:
            break;
    }
    openned = true;
}

function closeNav() {
    console.log('closed');
    ticketPanel.style.width = '0px';
    infoPanel.style.width = '0px';
    agendaPanel.style.width = '0px';
    searchPanel.style.width = '0px';
}