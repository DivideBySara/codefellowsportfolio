/* jshint browser: true, devel: true, esversion: 6 */

'use strict';

var application = application || {};

(function(module) {

  // A global view object holds the functions
  const githubReposView = {};

  const renderedRepos = Handlebars.compile($('#repoTemplate').html());

  // Next line provides application.githubReposView = githubReposView
  module.githubReposView = githubReposView;

  githubReposView.index = () => {
    // Removes <li>'s to prepare for reloading them
    $('#githubRepos').child('ul').empty();
    // Append renderedRepos (Handlebars-generated content)
    $('repoTemplate').append(application.githubRepos.map(renderedRepos));
  };

})(application);
