import axios from "axios"

const service = axios.create({
    timeout: 20000,
})

service.interceptors.request.use((config) => {
	
})