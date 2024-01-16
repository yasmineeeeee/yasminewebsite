function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
const pages = document.querySelectorAll(".page")
const header = document.querySelector("header")
const nbPages = pages.length // Nombre de pages du formulaire
let pageActive = 1


function darkmode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
// Fonction pour basculer entre le mode sombre et le mode clair
        function toggleDarkMode() {
            // Toggle de la classe "dark-mode" sur le body
            document.body.classList.toggle("dark-mode");

            // Sauvegarde du choix de l'utilisateur (localStorage)
            const isDarkMode = document.body.classList.contains("dark-mode");
            localStorage.setItem("darkMode", isDarkMode);
        }

        // Vérifie si le mode sombre est activé dans le localStorage
        const savedDarkMode = localStorage.getItem("darkMode");
        if (savedDarkMode) {
            document.body.classList.toggle("dark-mode", savedDarkMode === "true");
        }

        // Ajoute un écouteur d'événements pour le bouton de basculement
        document.getElementById("darkModeToggle").addEventListener("click", toggleDarkMode);