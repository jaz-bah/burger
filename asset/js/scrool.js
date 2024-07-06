var sectionNav = $('.section-navbar');

sectionNav.waypoint(function(){

    $('.section-navbar').toggleClass('box-shadow');

},
{
    offset: '-1%'
})

var section1 = $('.section-home');

section1.waypoint(function(){

    $('.section-home .pera').toggleClass('animate__animated animate__bounceInLeft');
    $('.section-home .heading1').toggleClass('animate__animated animate__bounceInLeft').css({'animation-delay':'0.2s'});
    $('.section-home .heading2').toggleClass('animate__animated animate__bounceInLeft').css({'animation-delay':'0.4s'});
    $('.section-home .img-box').toggleClass('animate__animated animate__bounceInUp').css({'animation-delay':'0.6s'});

},
{
    offset: '0px'
})


var section2 = $('.section-popular');

section2.waypoint(function(){

    $('.section-popular .jar1').removeClass('opacity0').addClass('animate__animated animate__bounceInUp');
    $('.section-popular .jar2').removeClass('opacity0').addClass('animate__animated animate__bounceInRight').css({'animation-delay':'0.2s'});
    $('.section-popular .jar3').removeClass('opacity0').addClass('animate__animated animate__bounceInRight').css({'animation-delay':'0.4s'});

},
{
    offset: '60%'
})