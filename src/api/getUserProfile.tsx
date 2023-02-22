import httpService from "./httpService"
import {API} from "../config.json"
import useAuthorization from "../hooks/useAuthorization"

export default async () => {
	const url = API["GET_&_UPDATE_USER"]

	const promise = await httpService().post(url, null, {headers: useAuthorization()})
	const response = await promise
	console.log(response)
	return response
}
