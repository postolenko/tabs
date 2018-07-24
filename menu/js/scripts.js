var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

var innerMenuWidth;
var innerMenu;

$(window).resize(function() {

    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

    if( bodyWidth > 768 ) {
        $(".dropdown-list").attr("style","");
        $(".dropdown-list > li > a").removeClass("active");
    }

});

$(document).ready(function() {

    $(".dropdown_wrapp").each(function() {

        if( $(this).find(".dropdown-list").length > 0 ) {

            $(this).find(".dropdown-link").append('<i class="fas fa-chevron-down"></i>');

        }

    });

    $(".dropdown-list li").each(function() {

        if( $(this).find(".inner-menu").length > 0 ) {

            $(this).children("a").append('<i class="fas fa-chevron-down"></i>');

        }

    });


    $(".dropdown-list > li > a i").click(function(e) {

        if( bodyWidth <= 768 ) {

            e.preventDefault();

            innerMenu = $(this).closest("li").find(".inner-menu");

            if(innerMenu.is(":hidden")) {

                innerMenu.slideDown(300);
                $(this).closest("a").addClass("active");

            } else {

                innerMenu.slideUp(300);
                $(this).closest("a").removeClass("active");

            }

        }


    });

    $( ".dropdown-list > li" ).mouseenter( function() {
        innerMenuWidth = $(this).closest(".menu_wrapp").outerWidth(true) - $(this).closest(".dropdown-list").outerWidth(true);
        innerMenu = $( this ).find(".inner-menu");
        innerMenu.css({
            "width" : innerMenuWidth + "px"
        });
    });


    $(".dropdown-link i").click(function(e) {

        if( bodyWidth <= 768 ) {

            e.preventDefault();

            dropdownMenu = $(this).closest(".dropdown_wrapp").find(".dropdown-list");

            if(dropdownMenu.is(":hidden")) {

                dropdownMenu.slideDown(300);

            } else {

                dropdownMenu.slideUp(300);

            }

        }

    });

});