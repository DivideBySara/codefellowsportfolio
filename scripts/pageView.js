/* jshint browser: true, devel: true, esversion: 6 */

'use strict';

// A global view object holds the functions
const pageView = {};

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

//TODO: Fix this function.
// Handle category-filter selection
pageView.handleCategoryFilter = function() {
  $('#category-filter').on('change', function() {
    $('#websites').hide();
    // 3rd: FadeIn only particular category selected
    $('website[data-category="' + $(this).val() + '"]').fadeIn();
  });
};

// Append website data to index.html & call pageView functions
pageView.loadIndexPage = function() {
  Website.all.forEach(function(website) {
    $('#websites').append(website.toHtml());
  });

  pageView.handleMainNav();
  pageView.addFilterCategories();
  pageView.handleCategoryFilter();
};
