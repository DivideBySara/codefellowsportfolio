/* jshint browser: true, devel: true, esversion: 6 */
'use strict';

var application = application || {};

// route for index.html
page('/', application.websiteController.getWebsitesSection);
// route for about.html
page('/about', application.aboutController.getAboutSection);
// call page()
page();
