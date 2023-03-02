import axios from "axios"

export default () => {
	axios.interceptors.response.use(null, error => {
		const expectedError =
			error.response && error.response.status >= 400 && error.response.status < 500

		if (!expectedError) {
			console.log("Logging the error-page", error)
			alert("An unexpected error-page occurred.")
		}
		console.log("Logging the error-page", error)
		return Promise.reject(error)
	})

	return {
		get: axios.get,
		post: axios.post,
		put: axios.put,
		patch: axios.patch,
		delete: axios.delete,
	}
}