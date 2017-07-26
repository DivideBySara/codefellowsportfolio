/* jshint browser: true, devel: true, esversion: 6 */
'use strict';
var application = application || {};

(function(module) {
  const githubRepos = {};

  githubRepos.all = [];

  githubRepos.getRepos = function(callback) {
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
        let repos = response.map(response => ({
          repo_url: response.html_url,
          name: response.name,
          collaborators_url: response.collaborators_url
        }));
        callback(repos);
      }
    );
  };

  module.githubRepos = githubRepos;
})(application);
