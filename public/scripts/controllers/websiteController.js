/* jshint browser: true, devel: true, esversion: 6 */
'use strict';

var application = application || {};

//IIFE
(function(module) {

  // Instantiate websiteController object
  const websiteController = {};

  // Use function in portfolio.js to getWebsitesSection
  websiteController.getWebsiteSection = () => {
    module.Website.getWebsites(function(){
      $('.tab.content').hide();
      $('#websites').fadeIn();
    });
  }

  // Attach websiteController to module
  module.websiteController = websiteController;
})(application);
