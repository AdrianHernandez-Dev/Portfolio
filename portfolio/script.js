console.log('hello')

function slideBio () {
  $('.bio').on('click', function(){
    console.log("checked")
    $(this).find('.section-bio').slidetoggle();
  })
}

slideBio();