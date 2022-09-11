module.exports=(sequelize, Datatypes) =>{
const Genres=sequelize.define('genre',{
	genre:{
		type: Datatypes.STRING,
		allowNull: false,
		defaultValue: 'No Genre'	
	}
		
})

return Genres
}
