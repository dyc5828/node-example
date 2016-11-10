/**
 * Models - Sequelize
 */
const Sequelize = require('sequelize')

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