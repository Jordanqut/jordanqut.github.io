document.addEventListener("DOMContentLoaded", function () {
    const tiers = document.querySelectorAll(".gang-tier");

    tiers.forEach(tier => {
        tier.addEventListener("click", function () {
            this.classList.toggle("expanded");

            // Collapse all others
            tiers.forEach(otherTier => {
                if (otherTier !== this) {
                    otherTier.classList.remove("expanded");
                }
            });
        });
    });
});


// Array of image paths for the slideshow
const heroImages = [
    "/static/heros/gangs/bikes.png",
    "/static/heros/gangs/cds.png",
    "/static/heros/gangs/cerebus.png",
    "/static/heros/gangs/fenrir.png",
    "/static/heros/gangs/prophets.png",
    "/static/heros/gangs/reapers.png",
];

let currentSlide = 0;
const heroSection = document.querySelector(".hero");

// Function to update hero background
function updateSlide() {
    heroSection.style.backgroundImage = `url('${heroImages[currentSlide]}')`;
    currentSlide = (currentSlide + 1) % heroImages.length;
}

// Change image every 3 seconds
setInterval(updateSlide, 3000);

// Initialize first slide
updateSlide();

// Scroll-to-Top Button
const topButton = document.getElementById("top-button");

window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Fix Home Button to redirect properly
document.addEventListener("DOMContentLoaded", function () {
    const homeButton = document.getElementById("home-button");
    if (homeButton) {
        homeButton.addEventListener("click", function () {
            window.location.href = "index.html"; // Ensure this is your actual homepage URL
        });
    }
});

