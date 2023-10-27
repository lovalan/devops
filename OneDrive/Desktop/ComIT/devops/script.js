// script.js

// Attendre que la page soit complètement chargée
document.addEventListener('DOMContentLoaded', function () {
    // Sélectionner l'élément d'en-tête (header)
    var header = document.querySelector('header');

    // Votre nouveau texte d'en-tête
    var nouveauTexte = "Bienvenue sur Mon Site Web Statique !";

    // Changer le texte de l'en-tête
    header.textContent = nouveauTexte;
});
