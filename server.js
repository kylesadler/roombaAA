// Set up Express
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const session = require('express-session');
const cors = require('cors');
const MemoryStore = require('express-session').MemoryStore();

// to connect to the db
const db = require("./backend/db.js") 

//// Link to the dist angular build directory (for Heroku's sake)
const distDir = __dirname + "/dist/";
app.use(express.static(distDir));

//// Set up bodyParser
app.use(bodyParser.json());

//// Set up CORS allowance (so we can test angular locally)
app.use(cors({origin: true, credentials: true}));
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Credentials', true);
  res.header("Access-Control-Allow-Origin", "http://127.0.0.1:4200");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization")
  next();
})

//// Set up cookie parser and sessions
app.use(cookieParser());
const sessionMemoryStore = new session.MemoryStore();
console.log(sessionMemoryStore);
app.use(session({
  secret: '0f18dec4-5d0f-11ea-bc55-0242ac130003',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false, httpOnly: false },
  store: sessionMemoryStore
}))

//// Set up Routes
const employeeRoutes = require("./backend/routes/employee.js");
const productRoutes = require("./backend/routes/product.js");
const signInRoutes = require("./backend/routes/activeUser.js");

app.use('/api/employee', employeeRoutes);
app.use('/api/product', productRoutes);
app.use('/api/auth', signInRoutes);

app.get('/session', function(req, res) {
  sessionMemoryStore.get(req.sessionID, function(err, data) {
    res.send({err: err, data: data});
  })
})

app.all('*', (req, res) => {
  res.status(200).sendFile(__dirname + '/dist/index.html');
});

//Affirm connection to server
app.listen(process.env.PORT || 8080, ()=>{
  var port = process.env.PORT || 8080;
  console.log('Server started at port:'+port);
})
