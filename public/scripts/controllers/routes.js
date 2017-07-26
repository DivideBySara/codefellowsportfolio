/* jshint browser: true, devel: true, esversion: 6 */
'use strict';

var application = application || {};

// route for index.html
page('/', application.websiteController.getWebsitesSection);
// route for about
page('/about', application.aboutController.getAboutSection);
// route for githubRepos
page('/githubRepos', application.githubReposController.getGithubReposSection);
// call page()
page();
