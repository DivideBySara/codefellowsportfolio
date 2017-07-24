/* jshint browser: true, devel: true, esversion: 6 */

'use strict';

// TODO: use an IIFE

// A global view object holds the functions
const pageView = {};

pageView.handleMainNav = function() {
  // Show page content for appropriate .tab clicked.
  $('.header-nav').on('click', '.tab', function(event){
    event.preventDefault();
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn();
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

pageView.handleFilter = function() {
  $('#category-filter').on('change', function() {
    if ($(this).val()) {
      $('website').hide();
      // 3rd: FadeIn only particular category selected
      $('website[data-category="' + $(this).val() + '"]').fadeIn();
    } else {
      $('website').fadeIn();
    }
  });
};

// Append website data to index.html & call pageView functions
pageView.loadIndexPage = function() {
  // TODO: refactor forEach() to map()
  application.Website.all.forEach(function(website) {
    $('#websites').append(website.toHtml());
  });

  pageView.handleMainNav();
  pageView.addFilterCategories();
  pageView.handleFilter();
};
