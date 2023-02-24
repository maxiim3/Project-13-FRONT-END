import {API} from "../config.json"
import httpService from "./httpService"

export default async (props: {email: string; password: string}) => {
	const payload = {
		email: props.email,
		password: props.password,
	}
	const promise = await httpService().post(API.LOGIN, payload)
	return promise
}
