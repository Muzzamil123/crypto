/*

Template: COINEX - Crypto Currency HTML Template 
Author: iqonicthemes.in
Version: 2.0

*/

/*----------------------------------------------
Index Of Script
------------------------------------------------

1.Page Loader
2.Back To Top
3.Header
4.counter
5.Wow Animation
6.Progress Bar
7.Countdown
8.Owl Carousel
9.Magnific Popup
10.Timeline
11.Accordion
12.Chart
13.Contact from

------------------------------------------------
Index Of Script
----------------------------------------------*/

$(document).ready(function() {

    /*------------------------
    Page Loader
    --------------------------*/
    jQuery("#load").fadeOut();
    jQuery("#loading").delay(0).fadeOut("slow");



    /*------------------------
    Back To Top
    --------------------------*/
    $('#back-to-top').fadeOut();
    $(window).on("scroll", function() {
        if ($(this).scrollTop() > 250) {
            $('#back-to-top').fadeIn(1400);
        } else {
            $('#back-to-top').fadeOut(400);
        }
    });
    // scroll body to 0px on click
    $('#top').on('click', function() {
        $('top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });



    /*------------------------
    Header
    --------------------------*/
    $('.navbar-nav li a').on('click', function(e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 50
        }, 1500);
        e.preventDefault();
    });
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 20) {
            $('header').addClass('menu-sticky');
        } else {
            $('header').removeClass('menu-sticky');
        }
    });


    /*------------------------
    Progress Bar
    --------------------------*/
    $('.iq-progress-bar > span').each(function() {
        var $this = $(this);
        var width = $(this).data('percent');
        $this.css({
            'transition': 'width 2s'
        });
        setTimeout(function() {
            $this.appear(function() {
                $this.css('width', width + '%');
            });
        }, 500);
    });



    /*------------------------
    Timeline
    --------------------------*/
    $('.timeline').timeline({
        forceVerticalMode: 800,
        mode: 'horizontal',
        visibleItems: 4
    });



    /*------------------------
    Accordion
    --------------------------*/
    $('.iq-accordion .iq-ad-block .ad-details').hide();
    $('.iq-accordion .iq-ad-block:first').addClass('ad-active').children().slideDown('slow');
    $('.iq-accordion .iq-ad-block').on("click", function() {
        if ($(this).children('div').is(':hidden')) {
            $('.iq-accordion .iq-ad-block').removeClass('ad-active').children('div').slideUp('slow');
            $(this).toggleClass('ad-active').children('div').slideDown('slow');
        }
    });


    /*------------------------
    Contact from
    --------------------------*/
    $('#contact').submit(function(e) {
        var flag = 0;
        e.preventDefault(); // Prevent Default Submission
        $('.require').each(function() {
            if ($.trim($(this).val()) == '') {
                $(this).css("border", "1px solid red");
                e.preventDefault(); // Prevent Default Submission
                flag = 1;
            } else {
                $(this).css("border", "1px solid grey");
                flag = 0;
            }
        });

        if (grecaptcha.getResponse() == "") {
            flag = 1;
            alert('Please verify Recaptch');

        } else {
            flag = 0;
        }

        if (flag == 0) {
            $.ajax({
                    url: 'contact-form.php',
                    type: 'POST',
                    data: $("#contact").serialize() // it will serialize the form data
                })
                .done(function(data) {
                    $("#result").html('Form was successfully submitted.');
                    $('#contact')[0].reset();
                })
                .fail(function() {
                    alert('Ajax Submit Failed ...');
                });
        }

    });


});