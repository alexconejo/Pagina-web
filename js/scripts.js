/*!
* Start Bootstrap - Clean Blog v6.0.5 (https://startbootstrap.com/theme/clean-blog)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/LICENSE)
*/
window.addEventListener('DOMContentLoaded', () => {
    let scrollPos = 0;
    const mainNav = document.getElementById('mainNav');
    const headerHeight = mainNav.clientHeight;
    window.addEventListener('scroll', function() {
        const currentTop = document.body.getBoundingClientRect().top * -1;
        if ( currentTop < scrollPos) {
            // Scrolling Up
            if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-visible');
            } else {
                console.log(123);
                mainNav.classList.remove('is-visible', 'is-fixed');
            }
        } else {
            // Scrolling Down
            mainNav.classList.remove(['is-visible']);
            if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-fixed');
            }
        }
        scrollPos = currentTop;
    });
})

// AOS
!(function($) {
    function aos_init() {
        AOS.init({
        duration: 1000,
        once: true
        });
    }
    $(window).on('load', function() {
        aos_init();
    });
});

// SKILLBAR

// PORTFOLIO
$(window).load(function() {
    $('.portfolio_menu ul li').click(function(){
        $('.portfolio_menu ul li').removeClass('active_prot_menu');
        $(this).addClass('active_prot_menu');
    });
    
    var $container = $('#portfolio');
    $container.isotope({
      itemSelector: '.col-sm-4',
      layoutMode: 'fitRows'
    });
    $('#filters').on( 'click', 'a', function() {
      var filterValue = $(this).attr('data-filter');
      $container.isotope({ filter: filterValue });
      return false;
    });
    });

