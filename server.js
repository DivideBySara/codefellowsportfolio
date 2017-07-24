/* jshint browser: true, devel: true, esversion: 6 */

'use strict';

// Require express, postgres
const pg = require('pg');
const express = require('express');

// Set a PORT
const PORT = process.env.PORT || 3000; // The default port is 3000.

// Static resources (now in public directory) should be passed to app.use()
const app = express();

// connect to database portfolio
const cString = `postgres://postgres:${process.env.PG_PASSWORD}@localhost:5432/portfolio`;
const client = new pg.Client(cString);
app.use(express.static('./public')); // Sets public as the root directory

// Write a route for the index page
app.get('.', function(request, response) {
  response.sendFile('index.html', {root: './public'});
});

// load the database
loadPortfolioDatabase();

// Listen for the port and console.log() it
app.listen(PORT, function() {
  console.log(`Listening at port ${PORT}. Now if only that port were the drinkable kind ;-)`);
});

function loadPortfolioDatabase() {
  client.query(`
    CREATE TABLE IF NOT EXISTS websites (
      website_id SERIAL PRIMARY KEY,
      title VARCHAR,
      author VARCHAR,
      description TEXT,
      publishedOn DATE,
      category VARCHAR);`
  )
  .then(loadPortfolioDatabase())
  .catch(console.error);
}
