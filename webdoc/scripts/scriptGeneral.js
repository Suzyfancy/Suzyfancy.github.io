"use strict";
document.addEventListener("DOMContentLoaded", initialiser);

function initialiser(evt) {
    let iconeSonOn = document.getElementById("soundOff");
    iconeSonOn.addEventListener("click", soundOn)

    let iconeSonOff = document.getElementById("soundOn");
    iconeSonOff.addEventListener("click", soundOff)

    let btnFullScreen = document.getElementById("fullScreen");
    btnFullScreen.addEventListener("click", openFullscreen)

    let btnSmallScreen = document.getElementById("smallScreen");
    btnSmallScreen.addEventListener("click", closeFullscreen)
    
    
    
}

function soundOn(evt) {
    var musique = document.getElementById("audio");
    musique.play();

    var soundOff = document.getElementById("soundOff")
    soundOff.style.visibility = "hidden";

    var soundOn = document.getElementById("soundOn")
    soundOn.style.visibility = "visible";

}

function soundOff(evt) {
    var musique = document.getElementById("audio");
    musique.pause();

    var soundOff = document.getElementById("soundOff")
    soundOff.style.visibility = "visible";

    var soundOn = document.getElementById("soundOn")
    soundOn.style.visibility = "hidden";

}




var elem = document.documentElement;

/* View in fullscreen */
function openFullscreen() {

    elem.requestFullscreen();
    
    var iconeFullScreen = document.getElementById("fullScreen")
    iconeFullScreen.style.visibility="hidden";
    
    var iconeSmallScreen = document.getElementById("smallScreen");
    iconeSmallScreen.style.visibility="visible";
}

/* Close fullscreen */
function closeFullscreen() {

    document.exitFullscreen();
    
    var iconeFullScreen = document.getElementById("fullScreen")
    iconeFullScreen.style.visibility="visible";
    
    var iconeSmallScreen = document.getElementById("smallScreen");
    iconeSmallScreen.style.visibility="hidden";

}

