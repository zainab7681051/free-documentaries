import axios from './axios.js'

export default{
	register (data){
		return axios().post('register',data)
	},
	login (data){
		return axios().post('login',data)
	}
}