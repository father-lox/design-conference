$(document).ready(function() {
    $(".slider").slick(
    {
        // centerMode: true,
        // leftPadding: '100px',
        infinite: true,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1500,
        cssEase: 'cubic-bezier(.31,.13,.22,.98)',
        // prevArrow: ".slick-prew",
        // nextArrow: ".slick-next",
        responsive: [
            {
                breakpoint: 1080,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 864,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 375 + 1,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            }
        ]
    }
);
    let inputs = document.querySelectorAll(".field-input__input");

for(let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("input", function() {
        this.value = this.value.toUpperCase();
    });
}
});
