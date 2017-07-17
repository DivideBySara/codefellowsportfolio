/* jshint browser: true, devel: true, esversion: 6 */

'use strict';

let websites = [];

// constructor
function Website (websiteData) {
  this.title = websiteData.title;
  this.url = websiteData.url;
  this.desc = websiteData.desc;
  this.author = websiteData.author;
  this.publishedOn = websiteData.publishedOn;
  this.category = websiteData.category;
}

// Handlebars renders articles to the DOM
Website.prototype.toHtml = function() {
  let websiteTemplateString = $('#websiteTemplate').html();
  let compileFunction = Handlebars.compile(websiteTemplateString);

  let html = compileFunction(this);
  return html;
};

// Sort websiteData so that newer websites appear first
websiteData.sort(function(a, b) {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

// Push website into websites array
websiteData.forEach(function(websiteObject) {
  websites.push(new Website(websiteObject));
});

// Append website data to index.html
websites.forEach(function(website) {
  $('#websites').append(website.toHtml());
});
