import httpService from "./httpService"
import {API} from "../config.json"
import useAuthorization from "../hooks/useAuthorization"

export default async () => {
	const promise = await httpService().get(API.GET_USERS, {headers: useAuthorization()})
	const response = await promise
	console.log(response)
	return response
}
