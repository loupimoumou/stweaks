/**
 * Convert a array to a Lua compatible string
 * @param {Object<string>} input
 * @return {string} output - Lua compatible
 */
function stringifyArray(input) {
	return JSON.stringify(input).replace('[', '{').replace(']', '}')
}

module.exports = {
	stringifyArray
}
