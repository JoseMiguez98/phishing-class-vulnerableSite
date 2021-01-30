'use strict';

$(document).ready(function() {
  const urlParams = new URLSearchParams(window.location.search);
  const userParam = urlParams.get('u');
  const userName = $('.username')[0];

  console.log('HOLA SOY EL BUENO');

  $(userName).append(userParam);
});
