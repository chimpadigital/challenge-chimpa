const carousel = new bootstrap.Carousel('#textCarousel', {
    interval: 10000,
    wrap: true,
    touch: true
});

const carouselGallery = new bootstrap.Carousel('#carouselGallery', {
    interval: 10000,
    wrap: true,
    touch: true
});

function sendForm(){
    alert("Su mail se ha enviado correctamente!");
    document.getElementById('contact-form').submit();
}