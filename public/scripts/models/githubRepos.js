/* jshint browser: true, devel: true, esversion: 6 */
'use strict';
var application = application || {};

(function(module) {
  const githubRepos = {};

  githubRepos.all = [];

  githubRepos.requestRepos = function(callback) {
    $.get('/github/user/repos?affiliation=owner,collaborator', function(response) {
      githubRepos.all = response;
    })
    .then(callback);
  }
  module.githubRepos = githubRepos;
})(application);
