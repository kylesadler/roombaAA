var express = require('express');
var router = express.Router();

var activeUserApi = require('../api/activeUser.js');

router.post("/signIn", (request, response) => {
  console.log("POST api/auth/signIn/ for sessionId = " + request.sessionID);
  activeUserApi.signIn(request, response);
});

router.post("/signOut", (request, response) => {
  console.log("POST api/auth/signOut/ for sessionId = " + request.sessionID);
  activeUserApi.signOut(request, response);
});

router.get("/isLoggedIn", (request, response) => {
  console.log("GET /isLoggedIn/ for sessionId = " + request.sessionID);
  activeUserApi.isLoggedIn(request.sessionID, response);
});

router.get("/debug/all", (request, response) => {
  console.log("GET api/auth/debug/all/ for sessionId = " + request.sessionID);
  activeUserApi.showAllLogins(request, response);
})

router.get("/isManager", (request, response) => {
  console.log("GET api/auth/isManager for sessionId = " + request.sessionID);
  activeUserApi.isManager(request, response);
})

router.get("/self", (request, response) => {
  console.log("GET api/auth/self for sessionId = " + request.sessionID);
  activeUserApi.getActiveEmployee(request, response);
})

module.exports = router;
