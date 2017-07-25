/* jshint browser: true, devel: true, esversion: 6 */

'use strict';

var application = application || {};

(function(module) {
// constructor
  function Website (websites) {
    this.title = websites.title;
    this.url = websites.url;
    this.description = websites.description;
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
    // Usp map() to build each website
    Website.all = websites.websiteData.map(element => new Website(element));
  };

// TODO: This reduce function doesn't get called??? Once working, append numCategories to the DOM.
  Website.getNumCategories = function() {
    let numCategories = Website.all.map(function(website) {
      return website.category;
    }).reduce(function(accumulator, category){
      return accumulator + category[0];
    }, 0)
    return numCategories;
  };

  // Gets websiteData
  Website.getWebsites = function() {
    // 1st: Check if local storage already has the data so the .js doesn't call for it again.
    if (localStorage.websiteData) {
      // If localStorage has the data, load it here:
      let parsedData = JSON.parse(localStorage.websiteData);
      Website.loadWebsites(parsedData); // Don't forget to parse the JSON!
      application.pageView.loadIndexPage();
    } else { // websiteData is not in localStorage
      // 2nd: Use AJAX to getJSON
      $.getJSON('../data/websiteTable.json').then(function(data) {
        localStorage.websiteData = JSON.stringify(data);
        let parsedData = JSON.parse(localStorage.websiteData);
        Website.loadWebsites(parsedData);
        application.pageView.loadIndexPage();
      }, function(errorMsg) {
        console.error(errorMsg);
      });
    }
  };

  module.Website = Website;
})(application);
