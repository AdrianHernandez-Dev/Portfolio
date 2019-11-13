function slideName() {
  $('.name').on('click', function () {
    $('html, body').animate({
      scrollTop: $('header').offset().top
    }, 1000)
  });
}

function slideBio() {
  $('.bio').on('click', function () {
    $('html, body').animate({
      scrollTop: $('.section-bio').offset().top
    }, 1000)
  });
}

function slideProject() {
  $('.projects').on('click', function () {
    $('html, body').animate({
      scrollTop: $('.section-projects').offset().top
    }, 1000)
  });
}

function slideContact() {
  $('.contact').on('click', function () {
    $('html, body').animate({
      scrollTop: $('.section-contact').offset().top
    }, 1000)
  });
}

function scroll() {
  slideBio();
  slideProject();
  slideContact();
  slideName();
}

$(scroll)