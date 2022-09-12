import axios from './axios.js'

export default{

	getAll (search){
		return axios().get('docs',{
			params:{
				search:search
			}
		})
	},

	//ADMIN
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