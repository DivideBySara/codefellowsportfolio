/* jshint browser: true, devel: true, esversion: 6 */

'use strict';

// Require express and body-parser
const express = require('express');
const bodyParser = require('body-parser');

// Set a PORT
const PORT = process.env.PORT || 3000; // The default port is 3000.

// Static resources (now in public directory) should be passed to app.use()
const app = express();
app.use(express.static('./public')); // Sets public as the root directory
