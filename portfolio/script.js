console.log('hello')

function slideBio () {
  $('.bio').on('click', function(){
    console.log("checked")
      $('html, body').animate({
        scrollTop: $(this).offset().top
      }, 800)
    });
  }

slideBio();