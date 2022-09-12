import axios from './axios.js'

export default{

	getAll (){
		return axios().get('docs')
	},

	like(id){
		return axios().post(`docs/${id}`)
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