/* jshint browser: true, devel: true, esversion: 6 */

'use strict';

var application = application || {};

(function(module) {

  // A global view object holds the functions
  const githubReposView = {};

  // Handlebars generates repos. renderRepos is a function!
  const renderRepos = Handlebars.compile($('#repoTemplate').html());

  // Next line provides application.githubReposView = githubReposView
  module.githubReposView = githubReposView;

  githubReposView.index = () => {
    // Removes <li>'s to prepare for reloading them
    $('#githubRepos').children('ul').empty();
    // Map repos
    let mappedRepos = application.githubRepos.all.map(renderRepos);
    // Append repos
    $('#githubRepos ul').append(mappedRepos);
  };

})(application);
