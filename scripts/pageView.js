/* jshint browser: true, devel: true, esversion: 6 */

'use strict';

// Configure a view object, to hold all our functions for dynamic updates and page-related event handlers
let pageView = {};

pageView.handleMainNav = function() {
  // Show page content for appropriate .tab clicked.
  // Home tab
  $('.icon-home').on('click', function(){
    $('.tab-content').hide();
    $('#websites').fadeIn();
  });
  // About tab
  $('.icon-books').on('click', function(){
    $('.tab-content').hide();
    $('#about').fadeIn();
  });
};

//TODO: Filter functions can be insterted here
// pageView.handleCategoryFilter = function() {
//   //make jquery object
//   //grab filter tag
//   //add category options to list
//   //detect change
//   //hide everything
//   //show selected
//   //fade in preferred
// }

// Call all functions once DOM is ready:
$(document).ready(function() {
  pageView.handleMainNav();
});
