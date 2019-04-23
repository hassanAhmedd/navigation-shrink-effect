//NAVIGATION SHRINK EFFECT

$(window).scroll(function() {
  if ($(document).scrollTop() > 100) {
    //CLASS ADD WHEN OFFSET GREATER THAN 100
    $('#guest-nav').addClass('shrink');
  } else {
    //CLASS REMOVE WHEN OFFSET LESS THAN 100
    $('#guest-nav').removeClass('shrink');
  }
});