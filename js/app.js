$(function () {
  $(document).scroll(function () {
    var $nav = $("#mainNav");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  })
})

// Get the current year for the copyright
$('#year').text(new Date().getFullYear());