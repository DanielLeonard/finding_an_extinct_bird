$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  if(wScroll > $('.child').offset().top - ($(window).height() / 1.2)) {

    $('.child').each(function(){

      $('.child').addClass('child-show');

    });

    $('.headings').each(function(){

      $('.headings').addClass('headings-show');

    });

  }

});
