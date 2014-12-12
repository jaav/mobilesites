$(document).ready(function () {


    //stick in the fixed 100% height behind the navbar but don't wrap it
    $('#slide-nav.navbar-inverse').after($('<div class="inverse" id="navbar-height-col"></div>'));
  
    $('#slide-nav.navbar-default').after($('<div id="navbar-height-col"></div>'));  

    // Enter your ids or classes
    var toggler = '.navbar-toggle';
    var pagewrapper = '#page-content';
    var navigationwrapper = '.navbar-header';
    var menuwidth = '100%'; // the menu inside the slide menu itself
    var slidewidth = '70%';
    var menuneg = '-100%';
    var slideneg = '-70%';


    $("#slide-nav").on("click", toggler, function (e) {

        var selected = $(this).hasClass('slide-active');

        $('#slidemenu').stop().animate({
            left: selected ? menuneg : '0px'
        });

        $('#navbar-height-col').stop().animate({
            left: selected ? slideneg : '0px'
        });

        $(pagewrapper).stop().animate({
            left: selected ? '0px' : slidewidth
        });

        $(navigationwrapper).stop().animate({
            left: selected ? '0px' : slidewidth
        });


        $(this).toggleClass('slide-active', !selected);
        $('#slidemenu').toggleClass('slide-active');


        $('#page-content, .navbar, body, .navbar-header').toggleClass('slide-active');


    });


    var selected = '#slidemenu, #page-content, body, .navbar, .navbar-header';


    $(window).on("resize", function () {

        if ($(window).width() > 767 && $('.navbar-toggle').is(':hidden')) {
            $(selected).removeClass('slide-active');
        }


    });

    $('.navbar-nav li a').on('click', function(e){
        $(document.body).append('<div class="alert alert-danger not-implemented-alert hide-custom-alert" role="alert" data-dismiss="alert"> <span class="glyphicon glyphicon-warning-sign" aria-hidden="true"></span>      <span class="sr-only">Error:</span><span id="custom-alert-message">This site is underconstruction so most menu items are not active yet</span></div>');
        console.log(e.target.title);
        if(e && e.target && e.target.title){
            console.log(e.target.title);
            $('#custom-alert-message').text(e.target.title);
            
        }else{
            console.log('title not set.');
        }
    });

    var addReadmore = function(){
        setTimeout(function(){
            $('#myTabContent').css('height','auto');
            // adding read more to tabs
            $('#mission').readmore({
                // heightMargin: 160
              // speed: 75,
              // height: 150
            });
        },500);
    };

    var destroyReadmore = function(){
        $('#myTabContent').css('height','188px');
        $('#mission').readmore('destroy');
    };
    
    $('#vision-tab').on('click', function(e){
        console.log('vision clicked');
        destroyReadmore();
    });
    $('#position-tab').on('click', function(e){
        console.log('position clicked');
        destroyReadmore();
    });
    $('#mission-tab').on('click', function(e){
        console.log('mission clicked');
        addReadmore();
    });
    addReadmore();
});