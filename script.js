// JavaScript
let slides = document.getElementsByClassName("slide");
let dots = document.getElementsByClassName("dot");
let slideIndex = 0;

// Function to display the slides
function showSlides() {
  // Hide all the slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Remove the "active" class from all the dots
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Increment the slide index
  slideIndex++;

  // If the slide index is greater than the total number of slides, reset it to 1
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  // Display the current slide and set the corresponding dot as active
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Start the slideshow
showSlides();

// Automatically transition to the next slide every 5 seconds
setInterval(showSlides, 5000);

// Add click event listeners to the navigation buttons
let prevBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");

prevBtn.addEventListener("click", function() {
  slideIndex -= 2;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  showSlides();
});

nextBtn.addEventListener("click", function() {
  showSlides();
});

// Add click event listeners to the dots
for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", function() {
    slideIndex = i;
    showSlides();
  });
}