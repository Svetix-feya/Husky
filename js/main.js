$(document).ready(function () {
    $('.popup-with-form').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#name',

        // When elemened is focused, some mobile browsers in some cases zoom in
        // It looks not nice, so we disable it:
        callbacks: {
            beforeOpen: function () {
                if ($(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '#name';
                }
            }


        }

    });
    $('.slider').slick({
        infinite: true,
        arrows: true,
        dots: false,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        // appendArrows: $('.slider::before','.slider::after'),
        prevArrow: '<button id="prev" type="button" class="btn btn-juliet"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
        nextArrow: '<button id="next" type="button" class="btn btn-juliet"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
        responsive: [
            
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 2,
                }
            },
            
            {
                breakpoint: 545,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    //    $('#slider__wrapper').slick({
    //         infinite: true,
    //         arrows: true,
    //         dots: false,
    //         autoplay: false,
    //         slidesToShow: 1,
    //         slidesToScroll: 1,
    //         // appendArrows: $('.slider::before','.slider::after'),
    //         prevArrow: '<button id="prev-2" type="button" class="btn btn-juliet"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
    //         nextArrow: '<button id="next-2" type="button" class="btn btn-juliet"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
            
    //     });

    $('.slider__puppies').slick({
        infinite: true,
        arrows: true,
        dots: false,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        // appendArrows: $('.slider::before','.slider::after'),
        prevArrow: '<button id="prev" type="button" class="btn btn-juliet prev-3"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
        nextArrow: '<button id="next" type="button" class="btn btn-juliet next-3"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
        responsive: [
            
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 1,
                }
            },

            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });


    $('.menu__btn').on('click', function(){
        $('.menu__list').toggleClass('menu__list--activ');
    });
});

