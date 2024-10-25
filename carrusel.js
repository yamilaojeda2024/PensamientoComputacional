let slideIndex = 0;
showSlide(slideIndex);

function moveSlide(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    const slides = document.getElementsByClassName("carrusel-item");
    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Oculta todos los slides
    }
    
    slides[slideIndex].style.display = "flex"; // Muestra el slide actual
}
