/* jshint browser: true, devel: true, esversion: 6 */
'use strict';
var application = application || {};

(function(module) {
  let githubRepos = {};

  githubRepos.all = [];

  githubRepos.requestRepos = function(ctx, next) { // ctx is a context object. next is the callback fxn
    $.get('/github/user/repos?affiliation=owner,collaborator', function(response) {
      githubRepos.all = response;
    })
    ctx.githubRepos = githubRepos.all;
    next();
  }

  githubRepos.getRepoByName = function(ctx, next) { // ctx is a context object. next is the callback fxn
    $.get(`/githubRepos/DivideBySara/${ctx.params.name}`, function(response) {
      githubRepos.all = response;
    })
    .then(function(response) {
      ctx.githubRepos = [response];
      next();
    })
  }

  module.githubRepos = githubRepos;
})(application);
