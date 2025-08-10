var typed = new Typed(".text", {
    strings: ["Full Stack Developer", "Web Developer", "UI/UX Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const html = document.documentElement;

const savedTheme = localStorage.getItem('theme') ||
(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
html.setAttribute('data-bs-theme', savedTheme);
updateThemeIcon(savedTheme);

themeToggle.addEventListener('click',()=>{
    const currentTheme = html.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    html.setAttribute('data-bs-theme',newTheme);
    localStorage.setItem('theme',newTheme);
    updateThemeIcon(newTheme);
});


function updateThemeIcon(theme){
    themeIcon.textContent = theme === 'dark' ? '☀️': '🌙' ;
}
// script.js - Inside DOMContentLoaded listener

// ===================================
//  HOME HERO STACKED CARD SLIDER
// ===================================
const stackedCardsGallery = document.querySelector('.stacked-cards-gallery .card-slider-wrapper');
console.log("Stacked Cards Gallery Wrapper:", stackedCardsGallery); // DEBUG

if (stackedCardsGallery) {
    const cards = Array.from(stackedCardsGallery.querySelectorAll('.hero-card'));
    console.log("Found Cards:", cards.length, cards); // DEBUG
    let currentCardIndex = 0;
    const totalCards = cards.length;
    const cardStateClasses = ['active-card', 'next-card', 'third-card', 'hidden-back-card'];

    function arrangeCards() {
        if (totalCards === 0) return;
        console.log("Arrange Cards Called - Current Index:", currentCardIndex); // DEBUG

        cards.forEach((card, i) => {
            cardStateClasses.forEach(cls => card.classList.remove(cls)); // Remove all previous state classes
            let stateIndex = (i - currentCardIndex + totalCards) % totalCards;

            if (stateIndex < cardStateClasses.length) {
                card.classList.add(cardStateClasses[stateIndex]);
                console.log("Card", i, "gets class:", cardStateClasses[stateIndex]); // DEBUG
            } else {
                card.classList.add('hidden-back-card'); // Default for cards beyond defined states
                console.log("Card", i, "gets class: hidden-back-card (extra)"); // DEBUG
            }
        });
    }

    function nextCard() {
        console.log("Next Card Called - Before:", currentCardIndex); // DEBUG
        currentCardIndex = (currentCardIndex + 1) % totalCards;
        console.log("Next Card Called - After:", currentCardIndex); // DEBUG
        arrangeCards();
    }

    if (totalCards > 0) {
        arrangeCards(); // Initial arrangement
        if (totalCards > 1) { // Only set interval if there's more than one card to cycle
             console.log("Setting interval for nextCard"); // DEBUG
             setInterval(nextCard, 4000);
        } else {
            console.log("Only one card, no interval set."); // DEBUG
        }
    } else {
        console.log("No cards found for stacked gallery."); // DEBUG
    }
} else {
    console.error("Stacked cards gallery wrapper not found! Check selector: '.stacked-cards-gallery .card-slider-wrapper'"); // DEBUG
}
// ===================================
//  END HOME HERO STACKED CARD SLIDER
// ===================================

// script.js - Add this inside your DOMContentLoaded listener, AFTER Home Hero Slider JS

// ===================================
//  ABOUT SECTION STACKED CARD SLIDER
// ===================================
const aboutStackedCardsGallery = document.querySelector('.about-image-area.stacked-cards-gallery .card-slider-wrapper'); // Specific selector for About
if (aboutStackedCardsGallery) {
    const aboutCards = Array.from(aboutStackedCardsGallery.querySelectorAll('.hero-card')); // Reusing .hero-card class
    let currentAboutCardIndex = 0;
    const totalAboutCards = aboutCards.length;
    const aboutCardStateClasses = ['active-card', 'next-card', 'third-card', 'hidden-back-card']; // Same state classes

    function arrangeAboutCards() {
        if (totalAboutCards === 0) return;
        // console.log("Arrange About Cards - Current Index:", currentAboutCardIndex);

        aboutCards.forEach((card, i) => {
            aboutCardStateClasses.forEach(cls => card.classList.remove(cls));
            let stateIndex = (i - currentAboutCardIndex + totalAboutCards) % totalAboutCards;

            if (stateIndex < aboutCardStateClasses.length) {
                card.classList.add(aboutCardStateClasses[stateIndex]);
            } else {
                card.classList.add('hidden-back-card');
            }
        });
    }

    function nextAboutCard() {
        currentAboutCardIndex = (currentAboutCardIndex + 1) % totalAboutCards;
        arrangeAboutCards();
    }

    if (totalAboutCards > 0) {
        arrangeAboutCards(); // Initial arrangement
        if (totalAboutCards > 1) {
            // console.log("Setting interval for About section cards");
            setInterval(nextAboutCard, 4500); // Slightly different timing perhaps
        }
    }
}
// ===================================
//  END ABOUT SECTION STACKED CARD SLIDER
// ===================================

// ... (Your other existing JS: Portfolio Lightbox, Smooth Scroll etc.) ...