const fs = require("fs");
const compress = require("../lib/compress");
const challengesList = [];
const challengesName = {};
const path = "./src/lua/";
const path2 = "./lua/"

// Table initialisation code
fs.readdirSync(path).forEach(file => {
	const module = require(path2 + file);
	challengesList.push(module)
	challengesName[module.details.name] = module;
})

function getRawCode(name) {
	if (challengesName[name] === undefined) {
		return false;
	}

	return challengesName[name].codegen();
}

function getCode(name) {
	return compress.packer(getRawCode(name))
}

function exists(name) {
	return (challengesName[name] !== undefined)
}

function getChallenges() {
	let challenges = [];
	challengesList.forEach(v => {
		challenges.push(v.details);
	})
	return challenges
}

module.exports = {
	getRawCode,
	getCode,
	exists,
	getChallenges
}
