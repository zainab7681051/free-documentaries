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
}