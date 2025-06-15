$(document).ready(function () {
    // Smooth scroll
    // Handle links with @href started with '#' only
    let windowSize = $(window).width();
    $(window).resize(function () {
        windowSize = $(window).width();
    });

    $(document).on('click', 'a[href^="#"]', function (e) {
        // Target element id
        const id = $(this).attr('href');

        // Abort
        if (id === '#') {
            return;
        }

        // Target element
        const target = $(id);

        // Abort
        if (target.length === 0) {
            return;
        }

        // Prevent standard hash navigation (avoid blinking in IE)
        e.preventDefault();

        // Top position relative to the document
        let position = target.offset().top - 0;

        // Mobile
        if (windowSize < 768) {
            position = target.offset().top - 0;
        }

        // Animated top scrolling
        $('body, html').animate({scrollTop: position});
    });

    // Menu
    $('.menuToggle').click(function () {
        $(this).parent().toggleClass('active');
    });
});
