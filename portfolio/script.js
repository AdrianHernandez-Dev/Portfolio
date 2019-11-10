console.log('hello')

function slideName() {
  $('.name').on('click', function(){
    console.log("checked")
      $('html, body').animate({
        scrollTop: $('header').offset().top
      }, 1000)
    });
  }

function slideBio() {
  $('.bio').on('click', function(){
    console.log("checked")
      $('html, body').animate({
        scrollTop: $('.section-bio').offset().top
      }, 1000)
    });
  }

  function slideProject() {
    $('.projects').on('click', function(){
      console.log("checked")
        $('html, body').animate({
          scrollTop: $('.section-projects').offset().top
        }, 1000)
      });
    }

    function slideContact() {
      $('.contact').on('click', function(){
        console.log("checked")
          $('html, body').animate({
            scrollTop: $('.section-contact').offset().top
          }, 1000)
        });
      }

function scroll(){
slideBio();
slideProject();
slideContact();
slideName();
}

$(scroll)