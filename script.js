
const hamburger = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a'); const body = document.body;

// Fonction pour basculer la classe 'active'
function toggleMenu() {
  navMenu.classList.toggle('active');
  body.classList.toggle('no-scroll');
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

document.addEventListener('DOMContentLoaded', () => {
  const problemCards = document.querySelectorAll('.problem-card');
  problemCards.forEach((card, index) => {
    // Délai progressif pour un bel effet en cascade
    setTimeout(() => {
      card.classList.add('loaded');
    }, index * 100);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const problemCards = document.querySelectorAll('.problem-card');
  problemCards.forEach((card, index) => {
    // Délai progressif pour un bel effet en cascade
    setTimeout(() => {
      card.classList.add('loaded');
    }, index * 100);
  });

  const toolCards = document.querySelectorAll('.tool-card');
  toolCards.forEach((card, index) => {
    // Délai progressif pour animer les cartes d'outils
    setTimeout(() => {
      card.style.opacity = '1';
      card.style.marginTop = '0';
    }, 300 + index * 150); // Commence après l'animation des problèmes
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const problemCards = document.querySelectorAll('.problem-card');
  problemCards.forEach((card, index) => {
    // Délai progressif pour un bel effet en cascade
    setTimeout(() => {
      card.classList.add('loaded');
    }, index * 150);
  });
});