$(function(){
  $('a[href^="#"]').click(function(){
    let speed = 500;
    let id = $(this).attr('href');
    let target = $("#" == id ? "html" : id);
    let position = $(target).offset().top;

    $('html, body').animate({
      scrollTop: position
    }, speed);
  });

  $('.contact-right-item').click(function(){
    if($(this).hasClass('active')){
      $(this).removeClass('active');
      // $('.contact-right-item a').removeClass('active-color');
    } else {
      $('.contact-right-item').removeClass('active');
      // $('.contact-right-item a').removeClass('active-color');
      $(this).addClass('active');
      // $('.contact-right-item a').addClass('active-color')
    }
  });

  $('.contact-right-item a').click(function(){
    if($(this).hasClass('active-color')){
      $(this).removeClass('active-color');
    } else {
      $('.contact-right-item a').removeClass('active-color');
      $(this).addClass('active-color');
    }
  });

  $('dt').click(function(){
    $('dd').slideToggle();
  });
});