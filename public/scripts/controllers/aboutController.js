/* jshint browser: true, devel: true, esversion: 6 */
'use strict';

var application = application || {};

//IIFE
(function(module) {

  // Instantiate aboutController object
  const aboutController = {};

  // Hide website and about sections. Then fadeIn about section.
  aboutController.getAboutSection = () => {
    $('.tab-content').hide();
    $('#about').fadeIn();
  };

  // Attach aboutController to module
  module.aboutController = aboutController;
})(application);
