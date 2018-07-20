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

$(window).load(function() {



});

$(window).resize(function() {

    

});

$(document).ready(function() {

    $(".tabs_wrapp").each(function() {
        activeMenuLink = $(this).find(".dropdown-menu a").filter(".active");
        indexAttr = activeMenuLink.attr("data-index-menu");
        activeTab = $(this).find(".tab").filter("[data-index-tab = '"+ indexAttr +"']");
        activeTab.addClass("active");
    });

    // $(".dropdown-menu").addClass("slidemenu");

    $(".dropdown_wrapp").each(function() {

        if( $(this).find(".dropdown-menu").length > 0 ) {

            $(this).find(".dropdown-toggle").append('<i class="fas fa-chevron-down"></i>');

        }

    });
   

    $(".dropdown-menu a").click( function(e) {

        e.preventDefault();

        parentBlock = $(this).closest(".tabs_wrapp");
        parentBlock.find(".dropdown-menu a").removeClass( "active" );
        indexAttr = $(this).attr("data-index-menu");
        parentBlock.find(".tab").removeClass( "active" );
        activeTab = parentBlock.find(".tab").filter("[data-index-tab = '"+ indexAttr +"']");
        $(this).addClass("active");
        activeTab.addClass("active");

    });

    // $( ".dropdown-toggle" ).bind({
    //   mouseenter: function() {
    //     // $( this ).css({
    //     //     "display" : "block"
    //     // });
    //     dropdownMenu = $( this ).closest(".dropdown_wrapp").find(".dropdown-menu");
    //     dropdownMenu.slideDown(300);

    //   },
    //   mouseleave: function() {
    //     // $( this ).css({
    //     //     "display" : "none"
    //     // });
    //     dropdownMenu.slideUp(300);
    //   }
    // });


});