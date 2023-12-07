document.addEventListener("click", function(event) {
    var menuContainer = document.getElementById("menuContainer");
    var menuButton = document.querySelector(".menu-boutton");

    // Vérifiez si le clic n'a pas eu lieu à l'intérieur du menu ou du bouton du menu
    if (!menuContainer.contains(event.target) && event.target !== menuButton) {
        // Fermez le menu s'il est ouvert
        if (menuContainer.style.left === "0px") {
            menuContainer.style.left = "-350px";
        }
    }
});
function toggleMenu() {
    var menuContainer = document.getElementById("menuContainer");

    if (menuContainer.style.left === "-350px") {
        menuContainer.style.left = "0";
        menuContainer.style.display = "block"; // Ajoutez cette ligne pour afficher le menu
    } else {
        menuContainer.style.left = "-350px";
        menuContainer.style.display = "none"; // Ajoutez cette ligne pour masquer le menu
    }
}


