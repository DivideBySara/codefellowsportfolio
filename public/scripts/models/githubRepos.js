/* jshint browser: true, devel: true, esversion: 6 */
'use strict';
var application = application || {};

(function(module) {
  const githubRepos = {};

  githubRepos.all = [];

  githubRepos.requestRepos = function(callback) {
    // ajax call
    $.ajax({
      url: 'https://api.github.com/users/DivideBySara/repos',
      method: 'GET',
      headers: {
        Authorization: `token ${githubToken}` // Token not committied to repository :-)
      }
    })
    .then(
      function (response) {
        githubRepos.all = response;
      }
   )
    .then(callback);
  };

  module.githubRepos = githubRepos;
})(application);
