//req and res from api on the server using axios

import axios from 'axios'
import store from '../store'
export default ()=>{
	return axios.create({
		baseURL:'http://localhost:1000/',
		headers: {
			"Content-type": "application/json",
			Authorization: `Bearer ${store.state.token}`
		}
	})
}