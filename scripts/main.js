(function () {
    'use strict';

    $(document).ready(function () {
        



       

        let links = $(".nav-link");

        links.on('click', function () {
            var page = $(this).attr('href');
            
            $('html, body').animate({
                scrollTop: $(page).offset().top
            }, speed);
            setTimeout(function(){
                $('.navbar-toggler').click();
            },speed);
        });

    });
}());
