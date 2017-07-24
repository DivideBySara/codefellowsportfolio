/* jshint browser: true, devel: true, esversion: 6 */

'use strict';

// TODO: use an IIFE

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
  //Sort websites so that newer websites appear first
  websites.websiteData.sort(function(a, b) {
    return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
  });
  //Push website into websites array
  // TODO: refactor forEach() to a .map()
  websites.websiteData.forEach(function(website) {
    Website.all.push(new Website(website));
  });
};

// Gets websiteData
// TODO: break the JSON lines into smaller functions.
Website.getWebsites = function() {
  // 1st: Check if local storage already has the data so the .js doesn't call for it again.
  if (localStorage.websiteData) {
    // If localStorage has the data, load it here:
    let parsedData = JSON.parse(localStorage.websiteData);
    Website.loadWebsites(parsedData); // Don't forget to parse the JSON!
    pageView.loadIndexPage();
  } else { // websiteData is not in localStorage
    // 2nd: Use AJAX to getJSON
    $.getJSON('../data/websiteTable.json').then(function(data) {
      localStorage.websiteData = JSON.stringify(data);
      let parsedData = JSON.parse(localStorage.websiteData);
      Website.loadWebsites(parsedData);
      pageView.loadIndexPage();
    }, function(errorMsg) {
      console.error(errorMsg);
    });
  }
};
