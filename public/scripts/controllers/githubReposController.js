/* jshint browser: true, devel: true, esversion: 6 */
'use strict';

application = application || {};

//IIFE
(function(module) {

  // Instantiate githubReposController object
  const githubReposController = {};

  // Hide website and about sections. Then fadeIn githubRepos section.
  githubReposController.getGithubReposSection = () => {
    $('.tab-content').hide();
    $('#githubRepos').fadeIn();
  };

  // Attach aboutController to module
  module.githubReposController = githubReposController;
})(application);
