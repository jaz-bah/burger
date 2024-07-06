$('.menu-toggle-btn').click(function(){
    $(this).toggleClass('fa-times');
    $('.nav-menu').toggleClass('active');

    $('.nav-menu .link1').toggleClass('animate__animated animate__flipInX').css({'animation-delay' : '0.7s'});
    $('.nav-menu .link2').toggleClass('animate__animated animate__flipInX').css({'animation-delay' : '0.9s'});
    $('.nav-menu .link3').toggleClass('animate__animated animate__flipInX').css({'animation-delay' : '1.1s'});
    $('.nav-menu .link4').toggleClass('animate__animated animate__flipInX').css({'animation-delay' : '1.3s'});
})