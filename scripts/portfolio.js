/* jshint browser: true, devel: true, esversion: 6 */

'use strict';

// constructor
function Website (websites) {
  this.title = websites.title;
  this.url = websites.url;
  this.desc = websites.desc;
  this.author = websites.author;
  this.publishedOn = websites.publishedOn;
  this.category = websites.category;
}

// List of websites is on the constructor function, not the prototype or a global object
Website.all = [];

// Handlebars renders articles to the DOM
Website.prototype.toHtml = function() {
  let websiteTemplateString = $('#websiteTemplate').html();
  let compileFunction = Handlebars.compile(websiteTemplateString);

  let html = compileFunction(this);
  return html;
};

// Loads websites. In this project, website data has been parsed from JSON.
Website.loadWebsites = function(websites) {
  // Sort websiteData so that newer websites appear first
  websites.sort(function(a, b) {
    return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
  });
  // Push website into websites array
  websites.forEach(function(website) {
    websites.push(new Website(website));
  });
};

// Gets websiteData
Website.getWebsites = function() {
  // 1st: Check if local storage already has the data so the .js doesn't call for it again.
  if (localStorage.websiteData) {
    // If localStorage has the data, load it here:
    Website.loadWebsites(JSON.parse(localStorage.websiteData)); // Don't forget to parse the JSON!
    pageView.loadIndexPage();
  } else { // websiteData is not in localStorage
    // 2nd: Use AJAX to getJSON
    $.getJSON('../data/websiteTable.json').then(function(data) {
      localStorage.websiteData = JSON.stringify(data);
      Website.loadWebsites(JSON.parse(localStorage.websiteData));
      pageView.loadIndexPage();
    }, function(errorMsg) {
      console.error(errorMsg);
    });
  }
};
