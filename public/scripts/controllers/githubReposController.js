/* jshint browser: true, devel: true, esversion: 6 */
'use strict';

var application = application || {};

//IIFE
(function(module) {

  // Instantiate githubReposController object
  let githubReposController = {};

  module.githubReposController = function(ctx, next) {
    // Hide website and about sections. Then fadeIn githubRepos section.
    githubReposController.getGithubReposSection = () => {
      $('.tab-content').hide();
      $('#githubRepos').fadeIn();

      next();
      // A githubReposView object is the callback so the view can render after data loads
      application.githubRepos.requestRepos(application.githubReposView);
    };
  }

 // for getting one repo in routes.js
  githubReposController.index = function(ctx, next) {
    $('.tab-content').hide();
    $('#githubRepos').fadeIn();

    next();

    application.githubRepos.requestRepos(application.githubReposView.index);
  }

  // Attach githubReposController to module
  module.githubReposController = githubReposController;
})(application);
