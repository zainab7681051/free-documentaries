module.exports=(sequelize, Datatypes) =>{
const Docs=sequelize.define('docs',{
	title:{
		type: Datatypes.STRING,
		allowNull: false	
	},
	description:{
		type: Datatypes.TEXT,
	},
	imageAdress:{
		type: Datatypes.STRING,
		allowNull: false
	},
	youtubeId:{
		type: Datatypes.STRING,
		allowNull: false
	},
	likes:{
		type: Datatypes.INTEGER,
		defaultValue: 0
	},
	dislikes:{
		type: Datatypes.INTEGER,
		defaultValue: 0
	}
		
})

return Docs
}
