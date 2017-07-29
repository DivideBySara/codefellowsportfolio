/* jshint browser: true, devel: true, esversion: 6 */
'use strict';

var application = application || {};

// route for index.html
page('/', application.websiteController.getWebsitesSection);
// route for about
page('/about', application.aboutController.getAboutSection);
// route for githubRepos. Note the middleware fxn in the middle
page('/githubRepos', application.githubRepos.requestRepos, application.githubReposController.getGithubReposSection);
// route for single github repo. Note the middleware fxn in the middle.
page('/githubRepos/:name', application.githubRepos.getRepoByName, application.githubReposController.index);
// page('/githubRepos', '/');
// call page()
page();
