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
	}

	//TODO-TASK=>finish ADMIN api
/*
	sumbit (docs){
		return axios().post('docs',list)
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