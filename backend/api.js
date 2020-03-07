const express = require('express');
const router = express.Router();
const Text = require('./text.js');
const util = require('./util.js');

// send all texts to frontend
router.get("/getTexts", (req, res) => {
    console.log("GET /api/getTexts");
    Text.find({}, util.handleQuery(res));
});

// send one text to robot
router.get("/getText", (req, res) => {
    console.log("GET /api/getText");
    Text.find({}, util.handleQuery(res)).sort({ $natural: -1 }).limit(1)

});

// frontend submit a post
router.post("/submit", (req, res) => {
    console.log("POST /api/submit: " + req.body.text);

    let newText = new Text({
        text: req.body.text,
    });

    newText.save(util.handleQuery(res));

});

// delete a post when done calling
router.post("/delete", (req, res) => {
    console.log("POST /api/delete");
    Text.findByIdAndDelete(req.body.id, util.handleQuery(res))
});

// clear all
router.get("/clear", (req, res) => {
    console.log("GET /api/clear");
    Text.deleteMany({}, util.handleQuery(res))
});

// reset texts
router.get("/reset", (req, res) => {
    console.log("GET /api/reset");
    Text.remove({})
    
    let newText = new Text({
        text: "existence is pain",
    });

    newText.save(util.handleQuery(res));
});

module.exports = router;