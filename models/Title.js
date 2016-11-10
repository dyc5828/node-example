/**
 * Dvd - Title model
 */
const Sequelize = require('sequelize')

const createTitleModel = (sequelize) => {
	const Title = sequelize.define('title', {
		title: Sequelize.STRING,
		releaseDate: Sequelize.DATE,
		award: Sequelize.STRING,
		genreId:Sequelize.INTEGER,
		ratingId: Sequelize.INTEGER,
	}, {
		timestamps: false,
		defaultScope: {
			limit: 50,
		},
	})
	return Title
}

module.exports = createTitleModel