const dotenv = require("dotenv")
dotenv.config()
module.exports = {
	port: process.env.PORT,
	db: {
		database: process.env.DB_NAME,
		user: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		options: {
			dialect: "postgres",
			host: process.env.HOST,

		}
	},
	authentication: {
		jwtSecret: process.env.JWT_SECRET
	}
}