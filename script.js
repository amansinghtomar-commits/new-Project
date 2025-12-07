
$(document).ready(function () {
    $('.eg-testimonial-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        loop: true,
        arrows: true,
        dots: true,
        infinite: true,
        centerMode: false,

        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});

