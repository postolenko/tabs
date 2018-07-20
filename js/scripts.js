var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

var activeMenuLink;
var parentBlock;
var indexAttr;
var activeTab;
var dropdownMenu;

$(window).resize(function() {

    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

    if( bodyWidth > 768 ) {

        $(".dropdown-list").attr("style", "");

    }

});

$(document).ready(function() {

    $(".tabs_wrapp").each(function() {
        activeMenuLink = $(this).find(".dropdown-list a").filter(".active");
        indexAttr = activeMenuLink.attr("data-index-menu");
        activeTab = $(this).find(".tab").filter("[data-index-tab = '"+ indexAttr +"']");
        activeTab.addClass("active");
    });

    $(".dropdown_wrapp").each(function() {

        if( $(this).find(".dropdown-list").length > 0 ) {

            $(this).find(".dropdown-link").append('<i class="fas fa-chevron-down"></i>');

        }

    });

    $(".dropdown-link").click(function(e) {

        e.preventDefault();

    });

    $(".dropdown-list a").click( function(e) {

        e.preventDefault();

        parentBlock = $(this).closest(".tabs_wrapp");
        parentBlock.find(".dropdown-list a").removeClass( "active" );
        indexAttr = $(this).attr("data-index-menu");
        parentBlock.find(".tab").removeClass( "active" );
        activeTab = parentBlock.find(".tab").filter("[data-index-tab = '"+ indexAttr +"']");
        $(this).addClass("active");
        activeTab.addClass("active");

    });
    

    $(".dropdown-link").click(function(e) {

        e.preventDefault();

        if( bodyWidth <= 768 ) {

            dropdownMenu = $(this).closest(".dropdown_wrapp").find(".dropdown-list");

            if(dropdownMenu.is(":hidden")) {

                dropdownMenu.slideDown(300);

            } else {

                dropdownMenu.slideUp(300);

            }

        }

    });

});