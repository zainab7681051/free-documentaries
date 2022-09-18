import axios from './axios.js'

export default{


	async getAllAsAdmin (search){
		try {
			return await axios().get('/admin/docs',{
						params:{
							search:search
						}
					})
		} catch (e) {
			console.log(e)
	    }
		  
	},
	async getGenresAsAdmin(){
		try {
			return await axios().get('/admin/genres')
		} catch(e){
			console.log(e)
		}
	},

	async add (docs){
		try{
			return await axios().post('/admin/docs',docs)
		} catch(e){
			console.log(e)
		}
	},
	async createAssociation(docId, genreId){
		try{
			return await axios().post('/admin/docs-genres',{
				docId: docId,
				genreId: genreId
			})
		} catch(e){
			console.log(e)
		}

	}
	/*
	update (id,list){
		return axios().put(`list/${id}`,list)
	},
	deleteOne (id){
		return axios().delete(`list/${id}`)
	},
	deleteAll (){
		return axios().delete(`list`)
	},*/
}