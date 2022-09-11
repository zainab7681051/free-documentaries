module.exports=(sequelize, Datatypes) =>{
const User=sequelize.define('user',{
	name:{
		type: Datatypes.STRING,
		unique: true,
		allowNull: false
		
	},
	email:{
		type: Datatypes.STRING,
		unique: true,
		allowNull: false
		
	},
	password:{
		type: Datatypes.STRING,
		allowNull: false
	}
		
})

return User
}
