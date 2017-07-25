/* jshint browser: true, devel: true, esversion: 6 */
'use strict';

application = application || {};

//IIFE
(function(module) {

  // Instantiate websiteController object
  const websiteController = {};

  // Use function in portfolio.js to getWebsites
  websiteController.getWebsitesSection = () => {
    module.website.getWebsites(function(){
      $('.tab.content').hide();
      $('#articles').show();
    });
  }

  // Attach websiteController to module
  module.websiteController = websiteController;
})(application);
