// console.clear();

// gsap.registerPlugin(Flip);

// const btnSmall = document.getElementById("flipgrid-btnS");
// const btnLarge = document.getElementById("flipgrid-btnL");
// const galleryContainer = document.querySelector(".flipgrid-gallery-container");
// const items = gsap.utils.toArray(".flipgrid-gallery-item");

// btnSmall.addEventListener("click", () => {
//   const state = Flip.getState(items);
//   galleryContainer.classList.add("small");
//   btnSmall.setAttribute("disabled", true);
//   btnLarge.removeAttribute("disabled");
//   Flip.from(state, {
//     duration: 1,
//     ease: "power1.inOut",
//     absolute: true,
//   });
// });

// btnLarge.addEventListener("click", () => {
//   const state = Flip.getState(items);
//   galleryContainer.classList.remove("small");
//   btnSmall.removeAttribute("disabled");
//   btnLarge.setAttribute("disabled", true);
//   Flip.from(state, {
//     duration: 1,
//     ease: "power1.inOut",
//     absolute: true,
//   });
// });
  const hamburger = document.querySelector('.hamburger-menu');
        const navMenu = document.querySelector('.nav-menu');
        const navLinks = document.querySelectorAll('.nav-menu a');

        // Fonction pour basculer la classe 'active'
        function toggleMenu() {
            navMenu.classList.toggle('active');
            // Change l'icône du hamburger en croix (X)
            hamburger.innerHTML = navMenu.classList.contains('active') ? '&#10005;' : '&#9776;'; 
        }

        // 1. Écoute l'événement de clic sur le bouton hamburger
        hamburger.addEventListener('click', toggleMenu);

        // 2. Ferme le menu lorsque l'utilisateur clique sur un lien (pour la navigation)
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                // S'assurer que le menu n'est actif qu'en mode mobile
                if (window.innerWidth <= 992) {
                    toggleMenu();
                }
            });
        });

        // 3. Ferme le menu si la fenêtre est redimensionnée au-dessus de 992px
        window.addEventListener('resize', () => {
            if (window.innerWidth > 992 && navMenu.classList.contains('active')) {
                toggleMenu();
            }
        });