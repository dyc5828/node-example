/**
 * App Entry
 */
const express = require('express')
const routes = require('./routes')

// App
const app = express()

// App Settings
// view templates
app.set('views', './views')		// optional
app.set('view engine', 'pug')	// optional
// readable html
app.locals.pretty = true

// Routes
app.use(routes)

// Server
app.listen(3000, () => {
	console.log('App listening on port 3000')
})