const db = require('../src/models/')
const DOCS = db.docs
const GENRES = db.genres
const DOCS_GENRES = db.docs_genres
const USER = db.user
const {
	sequelize
} = db

const promise = require('bluebird')
const docs = require('./docs.json')
const genres = require('./genres.json')
const docs_genres = require('./docs_genres.json')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('../src/config/')
const dotenv = require('dotenv')
dotenv.config()

function jwtSignUser(user) {
	const ONE_WEEK = 60 * 60 * 24 * 7
	return jwt.sign(user, config.authentication.jwtSecret, {
		expiresIn: ONE_WEEK
	})
}

sequelize.sync({
		force: true
	})
	.then(async () => {
		try {

			await promise.all(
				genres.map(genre => {
					GENRES.create(genre)

				})
			)

			await promise.all(
				docs.map(doc => {
					DOCS.create(doc)
				})
			)
			await promise.all(
				docs_genres.map(dg => {
					DOCS_GENRES.create(dg)
				})
			)


			const salt = await bcrypt.genSalt(10);
			var data = {
				name: process.env.ADMIN_NAME,
				email: process.env.ADMIN_EMAIL,
				password: await bcrypt.hash(process.env.ADMIN_PASS, salt)
			};

			const user = await USER.create(data)
			const userjson = user.toJSON()
			const jwtsu = await jwtSignUser(userjson)


		} catch (e) {
			console.log("ERROR SEED!", e)
			console.log("ERROR SEED!", e)
			console.log("ERROR!", e)
		}

	})