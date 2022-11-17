"use strict";
document.addEventListener("DOMContentLoaded", initialiser);




function initialiser(evt) {
    let image = document.getElementById("img1");
    image.addEventListener("click", changeText1)

    let image2 = document.getElementById("img2");
    image2.addEventListener("click", changeText2)

    let image3 = document.getElementById("img3");
    image3.addEventListener("click", changeText3)

    let image4 = document.getElementById("img4");
    image4.addEventListener("click", changeText4)

    let image5 = document.getElementById("img5");
    image5.addEventListener("click", changeText5)

    let image6 = document.getElementById("img6");
    image6.addEventListener("click", changeText6)

    let croix = document.getElementById("closeText");
    croix.addEventListener("click", closeText)

    


}

function changeText1(evt) {
    let zone = document.getElementById("zoneTexte")
    zone.innerHTML = "Ponyo est d'abord un petit poisson. Avec un peu de magie, elle parvient à se transformer en petite fille atypique. C'est l'image de l'innocence et de l'enfance. Ponyo devra traverser des épreuves et faire ses propres choix.";
    zone.style.fontSize = "180%";
    zone.style.top = "10vh";
    var croix = document.getElementById("closeText")
    croix.style.display = "flex"

    let background = document.querySelector('body')
    background.style.boxShadow= "inset 0px 0px 500px 500px rgba(0,0,0,0.3)";

    let imageCliquee = document.getElementById("img1");
    imageCliquee.style.height = "13vw";
    imageCliquee.style.opacity = "1";

    let image2 = document.getElementById("img2");
    image2.style.height = "8vw";
    image2.style.opacity = "0.5";
    let image3 = document.getElementById("img3");
    image3.style.height = "8vw";
    image3.style.opacity = "0.5";
    let image4 = document.getElementById("img4");
    image4.style.height = "8vw";
    image4.style.opacity = "0.5";
    let image5 = document.getElementById("img5");
    image5.style.height = "8vw";
    image5.style.opacity = "0.5";
    let image6 = document.getElementById("img6");
    image6.style.height = "8vw";
    image6.style.opacity = "0.5";
}

function changeText2(evt) {
    let zone = document.getElementById("zoneTexte")
    zone.innerHTML = "Sosuke est un petit garçon enthousiaste, curieux et bienveillant. Il vit seul avec sa mère, va à l'école et aime rendre visites aux grands mères de la maison de retraite. Sa sympathie le liera d'amitié avec Ponyo.";
    zone.style.fontSize = "180%";
    zone.style.top = "10vh";
    var croix = document.getElementById("closeText")
    croix.style.display = "flex"

    let background = document.querySelector('body')
   background.style.boxShadow= "inset 0px 0px 500px 500px rgba(0,0,0,0.3)";

    let imageCliquee = document.getElementById("img2");
    imageCliquee.style.height = "13vw";
    imageCliquee.style.opacity = "1";


    let image1 = document.getElementById("img1");
    image1.style.height = "8vw";
    image1.style.opacity = "0.5";
    let image3 = document.getElementById("img3");
    image3.style.height = "8vw";
    image3.style.opacity = "0.5";
    let image4 = document.getElementById("img4");
    image4.style.height = "8vw";
    image4.style.opacity = "0.5";
    let image5 = document.getElementById("img5");
    image5.style.height = "8vw";
    image5.style.opacity = "0.5";
    let image6 = document.getElementById("img6");
    image6.style.height = "8vw";
    image6.style.opacity = "0.5";
}

function changeText3(evt) {
    let zone = document.getElementById("zoneTexte")
    zone.innerHTML = "Lisa est la mère de Sosuke. Elle élève seule son fils, car son mari, Koichi est marin et très absent. Elle travaille à la maison de retraite. C'est une femme forte et énergique. Elle a d'ailleurs une conduite un peu dangereuse !";
    zone.style.fontSize = "180%";
    zone.style.top = "10vh";
    var croix = document.getElementById("closeText")
    croix.style.display = "flex"

    let background = document.querySelector('body')
    background.style.boxShadow= "inset 0px 0px 500px 500px rgba(0,0,0,0.3)";

    let imageCliquee = document.getElementById("img3");
    imageCliquee.style.height = "13vw";
    imageCliquee.style.opacity = "1";


    let image1 = document.getElementById("img1");
    image1.style.height = "8vw";
    image1.style.opacity = "0.5";
    let image2 = document.getElementById("img2");
    image2.style.height = "8vw";
    image2.style.opacity = "0.5";
    let image4 = document.getElementById("img4");
    image4.style.height = "8vw";
    image4.style.opacity = "0.5";
    let image5 = document.getElementById("img5");
    image5.style.height = "8vw";
    image5.style.opacity = "0.5";
    let image6 = document.getElementById("img6");
    image6.style.height = "8vw";
    image6.style.opacity = "0.5";
}

function changeText4(evt) {
    let zone = document.getElementById("zoneTexte")
    zone.innerHTML = "Fujimoto est le père de Ponyo. Grand magicien, il est attaché à l'environnement, surtout lorsqu'il n'est pas impacté par les humains. Il essaie de protéger sa fille de ces derniers, mais ignore beaucoup de leurs qualités naturelles. ";
    zone.style.fontSize = "180%";
    zone.style.top = "10vh";
    var croix = document.getElementById("closeText")
    croix.style.display = "flex"

    let background = document.querySelector('body')
   background.style.boxShadow= "inset 0px 0px 500px 500px rgba(0,0,0,0.3)";

    let imageCliquee = document.getElementById("img4");
    imageCliquee.style.height = "13vw";
    imageCliquee.style.opacity = "1";


    let image1 = document.getElementById("img1");
    image1.style.height = "8vw";
    image1.style.opacity = "0.5";
    let image2 = document.getElementById("img2");
    image2.style.height = "8vw";
    image2.style.opacity = "0.5";
    let image3 = document.getElementById("img3");
    image3.style.height = "8vw";
    image3.style.opacity = "0.5";
    let image5 = document.getElementById("img5");
    image5.style.height = "8vw";
    image5.style.opacity = "0.5";
    let image6 = document.getElementById("img6");
    image6.style.height = "8vw";
    image6.style.opacity = "0.5";
}

function changeText5(evt) {
    let zone = document.getElementById("zoneTexte")
    zone.innerHTML = "Granmamare est la mère de Ponyo. Au contraire de son mari, elle représente l'amour maternel, la beauté et la douceur. Elle est dépeinte telle une sirène, une déesse des océans. Plus sage sur l'impact des humains sur l'environnement, c'est un être féérique.";
    zone.style.fontSize = "180%";
    zone.style.top = "10vh";
    var croix = document.getElementById("closeText")
    croix.style.display = "flex"

    let background = document.querySelector('body')
    background.style.boxShadow= "inset 0px 0px 500px 500px rgba(0,0,0,0.3)";

    let imageCliquee = document.getElementById("img5");
    imageCliquee.style.height = "13vw";
    imageCliquee.style.opacity = "1";


    let image1 = document.getElementById("img1");
    image1.style.height = "8vw";
    image1.style.opacity = "0.5";
    let image2 = document.getElementById("img2");
    image2.style.height = "8vw";
    image2.style.opacity = "0.5";
    let image3 = document.getElementById("img3");
    image3.style.height = "8vw";
    image3.style.opacity = "0.5";
    let image4 = document.getElementById("img4");
    image4.style.height = "8vw";
    image4.style.opacity = "0.5";
    let image6 = document.getElementById("img6");
    image6.style.height = "8vw";
    image6.style.opacity = "0.5";
}

function changeText6(evt) {
    let zone = document.getElementById("zoneTexte")
    zone.innerHTML = "Les grands mères vivent à la maison de retraite. Ce sont des personnages amusants auxquels Sosuke vient souvent rendre visite. Elles sont aimantes et gentilles malgré leur grand âge et leur lieu de résidence.";
    zone.style.fontSize = "180%";
    zone.style.top = "10vh";
    var croix = document.getElementById("closeText")
    croix.style.display = "flex"

    let background = document.querySelector('body')
    background.style.boxShadow= "inset 0px 0px 500px 500px rgba(0,0,0,0.3)";

    let imageCliquee = document.getElementById("img6");
    imageCliquee.style.height = "13vw";
    imageCliquee.style.opacity = "1";


    let image1 = document.getElementById("img1");
    image1.style.height = "8vw";
    image1.style.opacity = "0.5";
    let image2 = document.getElementById("img2");
    image2.style.height = "8vw";
    image2.style.opacity = "0.5";
    let image3 = document.getElementById("img3");
    image3.style.height = "8vw";
    image3.style.opacity = "0.5";
    let image4 = document.getElementById("img4");
    image4.style.height = "8vw";
    image4.style.opacity = "0.5";
    let image5 = document.getElementById("img5");
    image5.style.height = "8vw";
    image5.style.opacity = "0.5";
}

function closeText(evt) {
    var zone = document.getElementById("zoneTexte")
    zone.innerHTML = "Clique sur un personnage";
    zone.style.fontSize = "400%";
    zone.style.top = "14vh";
    var croix = document.getElementById("closeText")
    croix.style.display = "none"

    let background = document.querySelector('body')
     background.style.boxShadow= "none";

    let photo1 = document.getElementById("img1");
    photo1.style.height = "10vw";
    photo1.style.opacity = "0.5";
    let photo2 = document.getElementById("img2");
    photo2.style.height = "10vw";
    photo2.style.opacity = "0.5";
    let photo3 = document.getElementById("img3");
    photo3.style.height = "10vw";
    photo3.style.opacity = "0.5";
    let photo4 = document.getElementById("img4");
    photo4.style.height = "10vw";
    photo4.style.opacity = "0.5";
    let photo5 = document.getElementById("img5");
    photo5.style.height = "10vw";
    photo5.style.opacity = "0.5";
    let photo6 = document.getElementById("img6");
    photo6.style.height = "10vw";
    photo6.style.opacity = "0.5";

}




