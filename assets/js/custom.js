$(function () {

    // Header Scroll
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 60) {
            $("header").addClass("fixed-header");
        } else {
            $("header").removeClass("fixed-header");
        }
    });


    // Featured Owl Carousel
    $('.featured-projects-slider .owl-carousel').owlCarousel({
        center: false,
        loop: false,
        margin: 30,
        nav: false,
        dots: false,
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    })


    // Count
    $('.count').each(function () {
		$(this).prop('Counter', 0).animate({
			Counter: $(this).text()
		}, {
			duration: 1000,
			easing: 'swing',
			step: function (now) {
				$(this).text(Math.ceil(now));
			}
		});
	});


    // ScrollToTop
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    const btn = document.getElementById("scrollToTopBtn");
    btn.addEventListener("click", scrollToTop);

    window.onscroll = function () {
        const btn = document.getElementById("scrollToTopBtn");
        if (document.documentElement.scrollTop > 100 || document.body.scrollTop > 100) {
            btn.style.display = "flex";
        } else {
            btn.style.display = "none";
        }
    };

    //code
    $(document).ready(function(){
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop: false, 
        margin: 25, 
        nav: false, // Hide default nav
        dots: false, // Hide default dots
        autoplay: false, // IMPORTANT: stop auto-sliding
        responsive:{
            0:{ items: 1.2, margin: 15 },
            768:{ items: 2.5 },
            992: { items: 3.5 },
            1400: { items: 4.5 }
        }
    });

    // --- Custom Navigation Events ---
    // Go to the next item
    $('.custom-next').click(function() {
        owl.trigger('next.owl.carousel');
    });

    // Go to the previous item
    $('.custom-prev').click(function() {
        owl.trigger('prev.owl.carousel', [300]);
    });
});



    // Aos
	AOS.init({
		once: true,
	});

});

