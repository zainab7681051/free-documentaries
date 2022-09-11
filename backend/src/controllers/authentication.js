//register and login
const db=require('../models')
const User=db.user
const jwt=require('jsonwebtoken')
const config =require('../config')
const bcrypt=require('bcrypt')
const Op = db.SEQUELIZE.Op;

function jwtSignUser(user){
const ONE_WEEK=60*60*24*7
return jwt.sign(user, config.authentication.jwtSecret,{
	expiresIn: ONE_WEEK
})
}

module.exports={
	
	async register(req,res){
		try{
			  const salt = await bcrypt.genSalt(10);
			  var data = {
			  	name: req.body.name,
			  	email : req.body.email,
			    password : await bcrypt.hash(req.body.password, salt)
			  };

			const user=await User.create(data)
			const userjson=user.toJSON()
			const jwtsu=jwtSignUser(userjson) 
			
			res.status(200).send({
				message:'registered successfully!',
				user:userjson,
				token:jwtsu
			})
			console.log({
				user:userjson,
				token:jwtsu
			})
		}catch(error){
			res.status(400).send({
				error:`Name or E-mail is already in use.`
			})
		}
		
	},

	async login (req,res){
		try{
			//name is either email adress or user name
			const {name, password}=req.body;
			const user=await User.findOne({
				where:{
					[Op.or]:[
					{name:name},
					{email:name}
					]
				}
			})			

			if(user){
				console.log("user exists")
				const validPassword=await bcrypt.compare(
					password,user.password)
				if(validPassword){
					const userjson=user.toJSON()
					const jwtsu=jwtSignUser(userjson) 
					res.status(200).send({
						message:'logged in successfully!',
						user:userjson,
						token:jwtsu
					})
					console.log({
						user:userjson,
						token:jwtsu
					})
				}else{

					return res.status(403).send({
						error: 'Password is incorrect'
					})
					
				}

			}else{
				return res.status(403).send({
					error:'Account does not exist'
				})
			}
		}catch(error){
			res.status(500).send({
				error:`An error has occured :(`
			})
		}
		
	}
}