'use strict';

var application = application || {};

// route for index.html
page('/', application.websiteController.initWebsiteController());
// route for about.html
page('/about', application.aboutController.initAboutController());
// call page()
page();
