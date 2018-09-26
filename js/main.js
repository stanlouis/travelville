$(document).ready(function() {
  // Init Side nav
  $('.sidenav').sidenav();

  // Init Slider
  $('.slider').slider({
    indicators: false,
    height: 500,
    transition: 500,
    interval: 6000
  });

  // Autocomplete
  $('input.autocomplete').autocomplete({
    data: {
      aruba: null,
      'Cancun Mexico': null,
      Hawaii: null,
      Florida: null,
      California: null,
      Jamaica: null,
      Europe: null,
      'The Bahamas': null
    }
  });
  // Init lighbox
  $('.materialboxed').materialbox();
});
