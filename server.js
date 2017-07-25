/* jshint browser: true, devel: true, esversion: 6 */

'use strict';

// Require express
const express = require('express');

// Set a PORT
const PORT = process.env.PORT || 3000; // The default port is 3000.

// Static resources (now in public directory) should be passed to appplication.use()
const application = express();

 // Sets public as the root directory
application.use(express.static('./public'));

// Write a route for the index page
application.get('.', function(request, response) {
  response.sendFile('index.html', {root: './public'});
});

// Listen for the port and console.log() it
application.listen(PORT, function() {
  console.log(`Listening at port ${PORT}. Now if only that port were the drinkable kind ;-)`);
});
