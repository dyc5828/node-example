/**
 * Dvd - Rating model
 */
const Sequelize = require('sequelize')

const createRatingModel = (sequelize) => {
	const Rating = sequelize.define('rating', {
		rating: Sequelize.STRING,
	}, {
		timestamps: false,
	})
	return Rating
}

module.exports = createRatingModel