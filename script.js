var slideIndex = 1;
showSlides(slideIndex);

// Fonction pour avancer ou reculer les slides
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Fonction pour afficher un slide spécifique
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Fonction principale pour afficher les slides
function showSlides(n) {
    var i;
    document.querySelectorAll(".slideshow-container").forEach(function (element) {
        
        var slides = element.getElementsByClassName("mySlides");
       
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";
    });
};


// Défilement automatique toutes les 2 secondes (2000 millisecondes)
setInterval(function () {
    plusSlides(1);
}, 3000);
