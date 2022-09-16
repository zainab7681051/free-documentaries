import axios from './axios.js'

export default{
	register (data){
		return axios().post('/admin/register',data)
	},
	login (data){
		return axios().post('/admin/login',data)
	}
}