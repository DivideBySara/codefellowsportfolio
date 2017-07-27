/* jshint browser: true, devel: true, esversion: 6 */

'use strict';

// Require express, proxy
const express = require('express');
const proxy = require('express-request-proxy');

// Set a PORT
const PORT = process.env.PORT || 3000; // The default port is 3000.

// Static resources (now in public directory) should be passed to appplication.use()
const app = express();

 // Sets public as the root directory
app.use(express.static('./public'));

// Set proxy route for #githubRepos
app.get('/github/*', function(request, response) {
  (proxy({
    url: `https://api.github.com/${request.params[0]}`,
    headers: {Authorization: `token ${githubToken}`}
  })
  )(request, response);
});

// Write a route for the index page
app.get('.', function(request, response) {
  response.sendFile('index.html', {root: './public'});
});

// Listen for the port and console.log() it
app.listen(PORT, function() {
  console.log(`Listening at port ${PORT}. Now if only that port were the drinkable kind ;-)`);
});
