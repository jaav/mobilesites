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
        if(e && e.target && e.target.title && e.target.title.toLowerCase() == "home"){
            console.log('home clicked');
            return;
        }
        $(document.body).append('<div class="alert alert-danger not-implemented-alert hide-custom-alert" role="alert" data-dismiss="alert"> <span class="glyphicon glyphicon-warning-sign" aria-hidden="true"></span>      <span class="sr-only">Error:</span><span id="custom-alert-message">This site is underconstruction so most menu items are not active yet</span></div>');
        if(e && e.target && e.target.title){
            console.log(e.target.title);
            if(e.target.title.toLowerCase() == "home"){
                console.log('home clicked');
                return;
            }
            $('#custom-alert-message').text(e.target.title);
            
        }else{
            console.log('title not set.');
        }
    });

    var addReadmore = function(tabId){
        setTimeout(function(){
            $('#myTabContent').css('height','auto');
            // adding read more to tabs
            $('#'+tabId).readmore({
                // heightMargin: 160
              // speed: 75,
              // maxHeight: 180
            });
        },500);
    };

    var destroyReadmore = function(){
        $('#mission').readmore('destroy');
        $('#objectives').readmore('destroy');
        $('#activity').readmore('destroy');
    };
    
    $('#objectives-tab').on('click', function(e){
        console.log('objectives-tab clicked');
        destroyReadmore();
        addReadmore('objectives');
    });
    $('#activity-tab').on('click', function(e){
        console.log('activity-tab clicked');
        destroyReadmore();
        addReadmore('activity');
    });
    $('#mission-tab').on('click', function(e){
        console.log('mission-tab clicked');
        destroyReadmore();
        addReadmore('mission');
    });
    addReadmore('mission');
});