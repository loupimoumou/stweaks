const challenges = require("./challengesManager");
const express = require("express");
const config = require('../config.json');

const router = express.Router();

router.get('/new', function (req, res) {

	if (req.query.key === undefined || req.query.check === undefined) {
		res.status(400);
		return res.send();
	}

	// Check if the key is correct
	if (config.servers[req.query.key] === undefined) {
		res.status(400);
		return res.send();
	}

	// Check if the detection exists
	if (!challenges.exists(req.query.check)) {
		res.status(400);
		return res.send();
	}
	res.set('Content-Type', 'text/plain');
	res.send(challenges.getCode(req.query.check));
})

router.get("/update", function (req, res) {
	// Check if the key is correct
	if (config.servers[req.query.key] === undefined) {
		res.status(400);
		return res.send();
	}
	res.json(challenges.getChallenges());
})

//TODO: Middleware for blacklisting clients

module.exports = router;
