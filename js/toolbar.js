let ticket = document.getElementById("billetterie");
let info = document.getElementById("informations");
let agenda = document.getElementById("agenda");
let search = document.getElementById("recherche");

function ouvrirBilleterie() {
    fermerNav();
    ticket.style.width = "500px";
}

function ouvrirInformations() {
    fermerNav();
    info.style.width = "500px";
}

function ouvrirAgenda() {
    fermerNav();
    agenda.style.width = "500px";
}

function ouvrirRecherche() {
    fermerNav();
    search.style.width = "500px";
}

function fermerNav() {
    document.getElementById("billetterie").style.width = "0px";
    document.getElementById("informations").style.width = "0px";
    document.getElementById("agenda").style.width = "0px";
    document.getElementById("recherche").style.width = "0px";
}