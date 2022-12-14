const SEQUELIZE = require('sequelize')
const config = require('../config')
const users = require("./users.js")
const docs = require("./docs.js")
const genres = require('./genres.js')
const docs_genres = require('./docs_genres.js')

const sequelize = new SEQUELIZE(
	config.db.database,
	config.db.user,
	config.db.password,
	config.db.options,
	{
		pool: {
			max: 5,
			min: 0,
			acquire: 30000,
			idle: 10000
		}
	}
)


sequelize
	.authenticate()
	.then(() => {
		console.log('Connection has been established successfully.');
	})
	.catch(err => {
		console.error('Unable to connect to the database:', err);
	});

const db = {}
db.sequelize = sequelize
db.SEQUELIZE = SEQUELIZE
db.user = (users)(sequelize, SEQUELIZE);
db.docs = (docs)(sequelize, SEQUELIZE);
db.genres = (genres)(sequelize, SEQUELIZE);
db.docs_genres = (docs_genres)(sequelize, SEQUELIZE);

db.docs.belongsToMany(db.genres, {
	through: db.docs_genres
})
db.genres.belongsToMany(db.docs, {
	through: db.docs_genres
})

module.exports = db