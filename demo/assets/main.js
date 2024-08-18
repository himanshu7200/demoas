$(function() {
    // Owl Carousel
    var owl = $(".owl-carousel");
    owl.owlCarousel({
        items: 7,
        margin: 10,
        loop: true,
        nav: false,
        dots:false,
        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 3
            },
            1000: {
                items: 7
            }
        }
    }); // Missing closing parenthesis here
});
