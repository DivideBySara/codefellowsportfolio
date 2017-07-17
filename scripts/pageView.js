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

// Filter categories must be added before they can be selected!
pageView.addFilterCategories = function() {
  $('website').each(function() {
    let catValue = $(this).attr('data-category');
    let catOptions = `<option value="${catValue}">${catValue}</option>`;
    if ($(`#category-filter option[value="${catValue}"]`).length === 0) {
      $('#category-filter').append(catOptions);
    } // else no need to append
  });
};

//TODO:
// Handle category-filter selection
pageView.handleCategoryFilter = function() {
  $('#category-filter').on('change', function() {
    $('#websites').hide();
    // 3rd: FadeIn only particular category selected
    $(`website[data-category="${$(this).val()}"]`).fadeIn(1000);
  });
}

// Call all functions once DOM is ready:
$(document).ready(function() {
  pageView.handleMainNav();
  pageView.addFilterCategories();
  pageView.handleCategoryFilter();
});
