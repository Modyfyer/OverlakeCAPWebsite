// Add Your Scripts here

// OWL-CAROUSEL
$('.banner-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 1000,
    responsive:{
        0:{
            items:1,
        },

        576:{
            items:1,
        },

        768:{
            items:1,

        },
        1000:{
            items:1
        }
    }
})
// OWL-CAROUSEL-END