const db=require('../models')
const Docs=db.docs
const Genres=db.genres
const User=db.user
const Docs_Genres=db.docs_genres
const Op=db.SEQUELIZE.Op
module.exports={

	async getAll(req,res){
		try {
			let docs = null
			const search=req.query.search
			
			if(search){
				docs=await Docs.findAll({
					where:
					{
						[Op.or]: [
						{ title : { [Op.iLike]: `%${search}%` }}, 
						{ description: { [Op.iLike]: `%${search}%` }},
						{ imageAdress : { [Op.iLike]: `%${search}%` }},
						{ youtubeId : { [Op.iLike]: `%${search}%` }}
					 ] 
					},
					limit:9,
					
					order:[
						['createdAt', 'DESC'],
						['updatedAt', 'DESC'],
					],
					include:[{
						model:Genres
					}]
				})

				if(docs[0]){
					res.status(200).send(docs)
				}else{
					res.status(400).send({
					error:'No documentaries found. try again.'
					})
				}
			}else{
				docs=await Docs.findAll({
					limit:9,
					order:[
					['createdAt', 'DESC'],
					['updatedAt', 'DESC'],
					],
					include:[{
						model:Genres
					}]
				})
					if(docs.length!=0){
						res.status(200).send(docs)
					}else{
						console.log({
						error:'No documentaries...sorry...'
					})
						return res.status(400).send({
						error:'No documentaries...'
					})
				}
			}
		} catch(e) {
			console.log(e)
			res.status(500).send({
				error:'cannot find documetaries for you :('
			})
		}
	},

	async getAllFromGenre(req,res){
		try {
			let docs = null
			let id=req.params.id
		
			docs=await Genres.findOne({
				where:{
					id:id
				},
				limit:9,
				order:[
					['createdAt', 'DESC'],
					['updatedAt', 'DESC'],
				],
				include:[{
					model:Docs,
					include:[{model:Genres}]
				}]
			})

			if(docs){
				res.status(200).send(docs)
			}else{
				res.status(400).send({
				error:'No documentaries found. try again.'
				})
			}

		} catch(e) {
			console.log(e)
			res.status(500).send({
				error:'cannot find documetaries for you :('
			})
		}
	},

	async getGenres(req,res){
		try {
			const genres=await Genres.findAll()
			genres.map(g=>console.log(g))
			return res.status(200).send(genres)
		} catch(e) {
			console.log(e);
			res.status(400).send({
				error: 'cannot get genres :('
			})
		}
	},

	async createAssociation(req,res){
		try {
			console.log(req.body)

			const association=await Docs_Genres.create({
				docId: req.body.docId,
				genreId: req.body.genreId
			})
			return res.status(200).send()
		} catch(e) {
			console.log(e);
			res.status(500).send({
				error: 'cannot create association :('
			})
		}
	},


	async deleteAssociation(req,res){
		try {
			
			await Docs_Genres.destroy({
				where:{
				docId: req.params.id,
				}
			})
			return res.status(200).send()
		} catch(e) {
			console.log(e);
			res.status(500).send({
				error: 'cannot delete association :('
			})
		}
	},

	async create(req,res){
		try {
			const docs=await Docs.create(req.body)

			console.log(docs.toJSON())
			res.status(200).send({
				message:'documentary data was created successfuly',
				docs:docs.toJSON()
			})
		} catch(e) {
			console.log(e)
			res.status(500).send({
				error:'cannot create a documentaries...sorry :('
			})
		}
	},

	async update(req,res){
		try {
			const {id}=req.params
		   
			const data=req.body
			console.log(data)
			const docs=await Docs.findOne({
				where:{
					id:id
				}
			})
		   if (docs) {
		   const newDocs=await Docs.update(data,{
				where:{
					id:id
				}
			})
		   	console.log(newDocs)
		   	return res.status(200).send(newDocs)
		   }
		   else{
		   	return res.status(400).send({
		   		error: 'cannot update because documentaries does not exist'
		   	})
		   }
   
		} catch(e) {
			console.log(e);
			res.status(500).send({
		   		error: 'cannot update docs :('
		   	})
		}
	},

	async deleteById(req,res){
		try {
			const {id}=req.params
			const docs=await Docs.findOne({
				where:{
					id:id
				}
			})
			if(docs){
				const old=await Docs.destroy({
					where:{
					id:id,
					}
				})
				return res.status(200).send()
			}else{
				 return res.status(400).send({
				error:'No such documentary to delete:('
			})
			}
		} catch(e) {
			console.log(e)
			return res.status(500).send({
				error:'cannot delete documentaries...sorry :('
			})
		}
	},

	async deleteAll(req,res){
		try {
			const docs=await Docs.findAll({
				limit: 9
			})
			if(docs.length!=0){
				docs.forEach( async function(element, index) {
				await element.destroy()
				});
				return res.status(200).send()
			}else{
				 return res.status(400).send({
				error:'No docs to delete :('
			})
			}
		} catch(e) {
			console.log(e)
			res.status(500).send({
				error:'cannot delete your documentaries...sorry :('
			})
		}
	},


}