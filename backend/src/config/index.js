module.exports={
	port:process.env.PORT || 1000,
	db:{
		database: process.env.DB_NAME || "freedocs",
		user: process.env.DB_USER || "zainab",
		password:process.env.PASSWORD || "1234",
		options:{
			dialect: process.env.DIALECT || "postgres",
			host: process.env.HOST || "localhost",
			
		}
	},
	authentication:{
		jwtSecret: process.env.JWT_SECRET || 'secret'

	}
}