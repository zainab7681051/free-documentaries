const db= require('../models/')
const DOCS=db.docs
const GENRES=db.genres
const DOCS_GENRES=db.docs_genres
const {sequelize}=db 

const promise=require('bluebird')
const docs=require('./docs.json')
const genres=require('./genres.json')
const docs_genres=require('./docs_genres.json')

sequelize.sync({force:true})
.then(async ()=>{	 
 try {
 	
 	await promise.all(
		genres.map(genre=>{
			GENRES.create(genre)
			
		})
	)
	
	await promise.all(
		docs.map(doc=>{
			DOCS.create(doc)
		})
	)
	await promise.all(
		docs_genres.map(dg=>{
			DOCS_GENRES.create(dg)
		})
	)

 } catch (e) {
	 console.log("ERROR!",e)
	 console.log("ERROR!",e)
	 console.log("ERROR!",e)
 }
 
})