"use strict";
document.addEventListener("DOMContentLoaded", initialiser);




function initialiser(evt) {
    let button = document.getElementById("valider");
    button.addEventListener("click", afficherPrix)
}

function afficherPrix(evt) {
    let zoneText = document.getElementById("hide")
    zoneText.style.display = "block"
}