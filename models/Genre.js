/**
 * Dvd - Genre model
 */
const Sequelize = require('sequelize')

const createGenreModel = (sequelize) => {
	const Genre = sequelize.define('genre', {
		genre: Sequelize.STRING,
	}, {
		timestamps: false,
	})
	return Genre
}

module.exports = createGenreModel