'use strict'

var data = require('./data')

var lines = ['a', 'ka', 'sa', 'ta', 'na', 'ha', 'ma', 'ya', 'ra', 'wa', 'n']

/**
 * Get line by kana type
 *
 * @param {String} line - a~n
 * @param {String} type - hiragana|katakana|all
 * @returns {String}
 */
module.exports = function (line, type) {
	var index = lines.indexOf(line)
	if (index === -1) {
		throw new Error('Out of range')
	}
	type = type || 'all'
	if (type === 'all') {
		return data.hiragana[index] + data.katakana[index]
	}
	return data[type][index]
}

/**
 * All kana data
 *
 * @param {Boolean} flatten - if merge hiragana and katakana
 * @returns {Object|Array}
 */
module.exports.data = function (flatten) {
	if (flatten) {
		return data.hiragana.concat(data.katakana)
	}
	return data
}

module.exports.lines = lines
