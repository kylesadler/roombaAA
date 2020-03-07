// Set up Express
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// to connect to the db
const db = require("./backend/db.js") 

//// Link to the dist angular build directory (for Heroku's sake)
const distDir = __dirname + "/dist/";
app.use(express.static(distDir));

//// Set up bodyParser
app.use(bodyParser.json());

const api = require('./backend/api.js');
server.use('/api', api);

//Affirm connection to server
app.listen(process.env.PORT || 8080, ()=>{
  var port = process.env.PORT || 8080;
  console.log('Server started at port:'+port);
})
