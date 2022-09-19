import axios from './axios.js'

export default{


	getAllAsAdmin (search){
		return axios().get('/admin/docs',{
					params:{
						search:search
					}
				})
	},
	getGenresAsAdmin(){
		return axios().get('/admin/genres')
	
	},

	add (docs){
		return axios().post('/admin/docs',docs)
	
	},
	createAssociation(docId, genreId){
	
		return axios().post('/admin/docs-genres',{
			docId: docId,
			genreId: genreId
		})
	
	},
	deleteAssociation(id){
	
		return axios().delete(`/admin/docs-genres/${id}`)
	
	},
	
	update (id,data){
		return axios().put(`/admin/docs/${id}`,data)
	},
	deleteOne (id){
		return axios().delete(`admin/docs/${id}`)
	},

	deleteAll (){
		return axios().delete(`/admin/docs`)
	},
}