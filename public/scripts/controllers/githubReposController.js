/* jshint browser: true, devel: true, esversion: 6 */
'use strict';

var application = application || {};

//IIFE
(function(module) {

  // Instantiate githubReposController object
  const githubReposController = {};

  // Hide website and about sections. Then fadeIn githubRepos section.
  githubReposController.getGithubReposSection = () => {
    $('.tab-content').hide();
    $('#githubRepos').fadeIn();

    // A githubReposView object is the callback so the view can render after data loads
    application.githubRepos.requestRepos(application.githubReposView.index);
  };

  // Attach githubReposController to module
  module.githubReposController = githubReposController;
})(application);
