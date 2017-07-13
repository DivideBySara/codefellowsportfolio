/* jshint browser: true, devel: true, esversion: 6 */

'use strict';
//Test that base.css, jQuery, and pageView.js are linked
//$('h1').addClass('blue');

// Configure a view object, to hold all our functions for dynamic updates and page-related event handlers
let pageView = {};

pageView.handleMainNav = function() {
  // Show page content for appropriate .tab clicked.
  // Home tab
  $('.icon-home').on('click', function(){
    $('.tab-content').hide();
    $('#websites').fadeIn();
    //$('.icon-home').off();
  });
  // About tab
  $('.icon-books').on('click', function(){
    $('.tab-content').hide();
    $('#about').fadeIn();
    //$('.icon-home').off();
  });
};

// Call all functions once DOM is ready:
$(document).ready(function() {
  pageView.handleMainNav();
})
