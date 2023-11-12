
function toggleMenu() {
    $('.burger-toggle').toggleClass('active');
    $('nav').toggleClass('active');
  };
  $( document ).ready(function(){
    if($(window).width() < 767){
      $('.logo').attr("src","img/photo de profil.jpg");
    }
    $(window).resize(function(){
      if($(window).width() < 767){
        $('.logo').attr("src","img/photo de profil.jpg");
      }
      else{
        $('.logo').attr("src","img/photo de couv.jpg");
      }
    })
  })
 
 