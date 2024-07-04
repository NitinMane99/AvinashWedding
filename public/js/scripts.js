// scripts.js

// Set the wedding date (09 July 2024 at 00:00 UTC+0)
const weddingDate = new Date("2024-07-09T00:00:00Z").getTime();

// Update the countdown every second
setInterval(function() {
    // Get the current date and time
    const now = new Date().getTime();

    // Calculate the time remaining until the wedding date
    const distance = weddingDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown timer
    document.getElementById("timer").innerHTML = `
        ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds
    `;

    // If the countdown is over, display a message
    if (distance < 0) {
        document.getElementById("timer").innerHTML = "The wedding has begun!";
    }
}, 1000); // Update every second (1000 milliseconds)

// Slideshow functionality
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 3000); // Change image every 2 seconds
}
