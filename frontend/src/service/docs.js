import axios from './axios.js'

export default{

	getAll (search){
		return axios().get('docs',{
			params:{
				search:search
			}
		})
	},

	getAllFromGenre(id){
		return axios().get(`docs/${id}`)
	},

	//TODO-TASK=>finish ADMIN api


	getAllAsAdmin (search){
		return axios().get('/admin/docs',{
			params:{
				search:search
			}
		})
	},

	/*sumbit (docs){
		return axios().post('docs',docs)
	},
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