import httpService from "./httpService"
import {API} from "../config.json"
import useAuthorization from "../app/hooks/useAuthorization"

export default async (token ?:string) => {
	const url = API["GET_&_UPDATE_USER"]

	const promise = await httpService().post(url, null, {headers: useAuthorization(token)})
	const response = await promise

	return response
}
