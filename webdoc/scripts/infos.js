"use strict";
document.addEventListener("DOMContentLoaded", initialiser);

function initialiser(evt) {
    
    let iconeCompositeur = document.getElementById("iconeCompositeur");
    iconeCompositeur.addEventListener("click", baisserSon)
    let iconeRealisateur = document.getElementById("iconeRealisateur");
    iconeRealisateur.addEventListener("click", baisserSon)
    let iconeStudio = document.getElementById("iconeStudio");
    iconeStudio.addEventListener("click", baisserSon)
    let iconeSynopsis = document.getElementById("iconeSynopsis");
    iconeSynopsis.addEventListener("click", baisserSon)
    let iconeTrailer = document.getElementById("iconeTrailer");
    iconeTrailer.addEventListener("click", baisserSon)
    
    let croix1 = document.getElementById("close1")
    croix1.addEventListener("click", monterSon)
    let croix2 = document.getElementById("close2")
    croix2.addEventListener("click", monterSon)
    let croix3 = document.getElementById("close3")
    croix3.addEventListener("click", monterSon)
    let croix4 = document.getElementById("close4")
    croix4.addEventListener("click", monterSon)
    let croix5 = document.getElementById("close5")
    croix5.addEventListener("click", monterSon)
    
}

function baisserSon(evt){
    let audio = document.getElementById("audio").volume = 0.15;
}

function monterSon(evt){
   let audio = document.getElementById("audio").volume = 0.5;
    let commentaire1 = document.getElementById("audioInfo1").volume = 0;
    let commentaire2 = document.getElementById("audioInfo2").volume = 0;
    let commentaire3 = document.getElementById("audioInfo3").volume = 0;
    let commentaire4 = document.getElementById("audioInfo4").volume = 0;
    let video = document.getElementById("videoInfo");
    }

