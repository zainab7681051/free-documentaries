const db=require('../models')
const Docs=db.docs
const Genres=db.genres
const User=db.user
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
					]
				})
				if(docs[0]){
					res.status(200).send(docs)
				}else{
					res.status(400).send({
					error:'No documentaries...sorry...'
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

	async like(req,res){
		try {
			const {id}=req.params
		   
			const data={
			}
			const docs=await Docs.update(data,{
				where:{
					id:id
				}
			})
		   if (docs) {
		   	console.log(docs)
		   	return res.send(data)
		   }
		   else{
		   	return res.status(400).send({
		   		error: 'cannot like/dislike because documentary does not exist'
		   	})
		   }
   
		} catch(e) {
			console.log(e);
			res.status(500).send({
		   		error: 'cannot update docs :('
		   	})
		}
	},
/////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

	async update(req,res){
		try {
			const {id}=req.params
		   
			const data={
				toDoText:req.body.toDoText,
				toDoDate:req.body.toDoDate,
				userId:req.user.id,
				toDoDone:req.body.toDoDone? false:true
			}
			const docs=await Docs.findOne({
				where:{
					id:id,
					userId:req.user.id
				}
			})
		   if (docs) {
		   const newDocs=await Docs.update(data,{
				where:{
					id:id,
					userId:req.user.id
				}
			})
		   	console.log(newDocs)
		   	return res.send(data)
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

	async create(req,res){
		try {
			const a={
				toDoText:req.body.toDoText,
				toDoDate:req.body.toDoDate,
				userId:req.user.id,
				toDoDone:false

			}
			const docs=await Docs.create(a)

			console.log(docs.toJSON())
			res.status(200).send({
				message:'documentaries was created successfuly',
				docs:docs.toJSON()
			})
		} catch(e) {
			console.log(e)
			res.status(400).send({
				error:'cannot create a todo :('
			})
		}
	},

	async deleteById(req,res){
		try {
			const {id}=req.params
			const docs=await Docs.findOne({
				where:{
					id:id,
					userId:req.user.id
				}
			})
			console.log(docs)
			if(docs){
				const old=await Docs.destroy({
					where:{
					id:id,
					userId:req.user.id
				}
				})
				return res.status(200).send({
					old,
					message:'documentaries was deleted successfuly'
				})
			}else{
				 return res.status(400).send({
				error:'No such documentaries to delete:('
			})
			}
		} catch(e) {
			console.log(e)
			res.status(400).send({
				error:'cannot delete your todo\ :('
			})
		}
	},

	async deleteAll(req,res){
		try {
			const docs=await Docs.findAll({
				where:{
					userId:req.user.id
				}
			})
			if(docs[0]){
				docs.forEach( async function(element, index) {
				console.log(index,element)
				await element.destroy()
				});
				return res.status(200).send({
					message:'docs was deleted successfuly'
				})
			}else{
				 return res.status(400).send({
				error:'No todo\'s to delete:('
			})
			}
		} catch(e) {
			console.log(e)
			res.status(400).send({
				error:'cannot delete your todo\'s :('
			})
		}
	},


}