import httpService from "./httpService"
import {API} from "../config.json"
import useAuthorization from "../app/hooks/useAuthorization"

export default async (props: {firstName?: string; lastName?: string}) => {
	const payload = {
		firstName: props?.firstName || null,
		lastName: props?.lastName || null,
	}
	const promise = await httpService().put(API["GET_&_UPDATE_USER"], payload, {headers: useAuthorization()})
	const response = await promise
	console.log(response)
	return response
}
