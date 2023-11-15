'use strict'


function toggleIcon() {
    $('.icon').on('click', function(){
        $('.icon').toggleClass('active');
        $('.menu-mobile').slideToggle(300);
    })
}

function closeMobileMenu(){
    $('.menu-mobile').on('click', 'a', function(){
        $('.icon').trigger('click');
    })
}

$(document).ready(function () {
    $('.menu-link').hover(function () {
        var imageUrl = $(this).data('image');
        $('.menu-image').css('background-image', 'url(' + imageUrl + ')');
        $('.menu-image-link').attr('href', $(this).attr('href')); // Set the href attribute of the anchor tag
    }, function () {
        // Reset the background image on mouse out
        $('.menu-image').css('background-image', 'none');
        $('.menu-image-link').removeAttr('href'); // Remove the href attribute on mouse out
    });
});



//when the page loads call toggleIcon;
$(toggleIcon);
$(closeMobileMenu);
