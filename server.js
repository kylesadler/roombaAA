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


app.get("/api", (request, response) => {
  console.log("GET api/");
  productApi.getAllProducts(request, response);
});

app.post("/api", (request, response) => {
  console.log("POST api/");
  productApi.getAllProducts(request, response);
});

//Affirm connection to server
app.listen(process.env.PORT || 8080, ()=>{
  var port = process.env.PORT || 8080;
  console.log('Server started at port:'+port);
})
