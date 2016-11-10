/**
 * Models - Sequelize
 */
const Sequelize = require('sequelize')
const Title = require('./Title')
const Genre = require('./Genre')
const Rating = require('./Rating')

// Connect
const sequelize = new Sequelize(
	'dvd',			// db name
	'student',	// user
	'itp2016',	// password
	{
		dialect: 'mysql',
		host: 'node-example.cpskphfmspf2.us-west-2.rds.amazonaws.com',
		logging: true,
	}
)

// Authenticate
sequelize
	.authenticate()
	.then(() => {
		console.log('DB connection OK')
	})
	.catch(error => {
		console.log('DB connection error', error.message)
	})

// Models
const title = Title(sequelize)
const genre = Genre(sequelize)
const rating = Rating(sequelize)

// Relationships
title.belongsTo(genre)
title.belongsTo(rating)
rating.hasMany(title)
genre.hasMany(title)

module.exports = {
	title,
	genre,
	rating,
}