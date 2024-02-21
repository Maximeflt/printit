// Tableau
const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];
const numberOfSlides = slides.length;
let currentSlideIndex = 0;

// Fonction Mise A Jour Du Carrousel
function updateCarousel() {
    const currentSlide = slides[currentSlideIndex];
    document.querySelector('.banner-img').src = `./assets/images/slideshow/${currentSlide.image}`;
    document.querySelector('#banner p').innerHTML = currentSlide.tagLine;
}

// Event Listeners sur les fleches
document.getElementById('leftArrow').addEventListener('click', function () {
    console.log('Flèche gauche cliquée');
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    updateCarousel();
});

document.getElementById('rightArrow').addEventListener('click', function () {
    console.log('Flèche droite cliquée');
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    updateCarousel();
});

// Initialisation carrousel premier element
updateCarousel();

// Sélection de l'élément qui contient les bullet points
const bulletPointsContainer = document.querySelector('.dots');

// Crée les bullet points 
for (let i = 0; i < numberOfSlides; i++) {
    const bulletPoint = document.createElement('div');
    bulletPoint.classList.add('dot');
    bulletPointsContainer.appendChild(bulletPoint);

    // Ajout d'un écouteur d'événements pour changer d'image lorsqu'un bullet point est cliqué
    bulletPoint.addEventListener('click', function () {
        currentSlideIndex = i;
        updateCarousel();
        updateBulletPoints();
    });
}

// Mise à jour de l'apparence des bullet points en fonction de l'image atuelle
function updateBulletPoints() {
    const bulletPoints = bulletPointsContainer.querySelectorAll('.dot');
    bulletPoints.forEach((bulletPoint, index) => {
        if (index === currentSlideIndex) {
            bulletPoint.classList.add('dot_selected');
        } else {
            bulletPoint.classList.remove('dot_selected');
        }
    });
}

// lancement de la fonction pour initialiser l'apparence des bullet points
updateBulletPoints();


