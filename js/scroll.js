const $navLinks = $('nav a');
const animationScrollTime = 700;
const $page = $('html, body');
const $logo = $('.nav-icon-container');

$(document).ready(function() {

    function scrollToSection(event) {

        const anchor = $(this).attr('href');
        event.preventDefault();
        $page.animate({
            scrollTop: anchor !== '' ? $(anchor).offset().top : 0
        }, animationScrollTime, function () {
            window.location.hash = anchor;
        });

    }

    function scrollToTop() {

        const animationTime = 700;
        $page.animate({ scrollTop: 0}, animationTime);

    }

    $navLinks.on('click', scrollToSection);
    $logo.on('click', scrollToTop);
});
