/* jshint browser: true, devel: true, esversion: 6 */

'use strict';
//Test that base.css, jQuery CDN & portfolio.js are operational
//$('h1').addClass('blue');

let websites = [];

// constructor
function Website (websiteData) {
  this.title = websiteData.title;
  this.url = websiteData.url;
  this.desc = websiteData.desc;
  this.author = websiteData.author;
  this.publishedOn = websiteData.publishedOn;
}

// Build a toHTML() to use on Website to use on index.html
// We could put this in the constructor, but then each object has to have the method,
// and methods are heavyweight.
// Note: A capitalized object is a constructor!
Website.prototype.toHtml = function() {
  let $newWebsite = $('article.template').clone();
  $newWebsite.removeClass('template');

  $newWebsite.find('h1').text(this.title);
  $newWebsite.find('.url').text(this.author).attr('href', this.url);
  $newWebsite.find('.desc').html(this.desc);
  $newWebsite.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago');
  $newWebsite.append('<hr>');
  return $newWebsite;
};

// Push website into websites array
websiteData.forEach(function(websiteObject) {
  websites.push(new Website(websiteObject));
});

// Append website data to index.html
websites.forEach(function(website) {
  $('#websites').append(website.toHtml());
});
