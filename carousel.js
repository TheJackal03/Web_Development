var currentSlide = 0;
var slides = document.querySelectorAll('#img');

function showSlide(n) {
  // Hide all slides
  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }
  
  // Calculate the next slide index
  currentSlide = (currentSlide + n + slides.length) % slides.length;
  
  // Show the next slide
  slides[currentSlide].classList.add('active');
}

function changeSlide(n) {
  showSlide(n);
}


// Show the initial slide
showSlide(0);



