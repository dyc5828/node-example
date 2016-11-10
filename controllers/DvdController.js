/**
 * Dvd Controller
 */
const moment = require('moment')
const { title, genre, rating } = require('./../models')

class DvdController {
	constructor() {
		this.index = this.index.bind(this)
		this.detail = this.detail.bind(this)
	}
	
	index(req, res) {
		console.log('/index')
		return title.findAll().then(titles => {
			return res.render('dvds', { titles })
		})
	}
	
	detail(req, res) {
		console.log('/detail')
		if (!req.params.id) {
			return res.redirect('/')
		}
		return title
			.findById(req.params.id, {
				include: [ genre, rating, ],
			})
			.then(title => {
				return res.render('detail', {
					title: title.title,
					genre: title.genre.genre,
					rating: title.rating.rating,
					award: title.award,
					releaseDate: moment(title.releaseDate).format('MM / DD / YYYY'),
				})
			})
			.catch(error => {
				return res.send('oops')
			})
	}
}


module.exports = DvdController