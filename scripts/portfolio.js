/* jshint browser: true, devel: true, esversion: 6 */

$(document).ready(function() {
  'use strict';
  /* Test that base.css, jQuery CDN & portfolio.js are operational
  $('h1').addClass('blue');*/

  // 7/11/17 adapted from stackoverflow.com as temporary generic code
  // TODO: fix constructor function to model my project
  let Stuff = function() {
    this.add = function() {
      alert('add');
      return this;
    };

    this.del = function() {
      alert('delete');
      return this;
    };

    if (this instanceof Stuff) {
      return this.Stuff;
    } else {
      return new Stuff();
    }
  };
  let test = new Stuff();
  test.add().del();
});
