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