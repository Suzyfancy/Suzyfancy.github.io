// CODE MENU BURGER

const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


// Ajouter un écouteur d'événement sur le document
document.addEventListener('click', (event) => {
  // Vérifier si le clic n'a pas eu lieu sur le menu ou le bouton burger
  if (!navLinks.contains(event.target) && !burger.contains(event.target)) {
    navLinks.classList.remove('active'); // Fermer le menu
  }
});


window.addEventListener('DOMContentLoaded', (event) => {
  const currentURL = window.location.pathname;
  const menuLinks = document.querySelectorAll('.menu-link');

  menuLinks.forEach(link => {
    const linkURL = new URL(link.href).pathname;
    if (linkURL === currentURL) {
      link.classList.add('active');
    }
  });
});


// CODE FILTRAGE PROJETS

document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll(".filter-button");
    const projects = document.querySelectorAll(".project");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const filterValue = button.getAttribute("data-filter");
            
            projects.forEach(project => {
                const projectCategories = project.classList;
                
                if (filterValue === "all" || projectCategories.contains(filterValue)) {
                    project.style.display = "block";
                } else {
                    project.style.display = "none";
                }
            });
        });
    });
});




