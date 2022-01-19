import axios, { AxiosRequestConfig } from "axios"

const service = axios.create({
    timeout: 20000,
})

service.interceptors.request.use((config: AxiosRequestConfig) => {
	console.log(config)
	return config
})