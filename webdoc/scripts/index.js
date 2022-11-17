"use strict";
document.addEventListener("DOMContentLoaded", initialiser);

function initialiser(evt) {

    var flecheRedirection1 = document.getElementById("flechePlongeon1")
    flecheRedirection1.addEventListener("click", sonRedirection1)

    var flecheRedirection2 = document.getElementById("flechePlongeon2")
    flecheRedirection2.addEventListener("click", sonRedirection2)
    

}





function sonRedirection1(evt) {
    var son = document.getElementById("audio");
    son.play();
    document.location.href = "menu.html";

}

function sonRedirection2(evt) {
    var son = document.getElementById("audio");
    son.play();
    document.location.href = "menu.html";




}
