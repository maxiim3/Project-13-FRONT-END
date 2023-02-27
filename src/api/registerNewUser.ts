import httpService from "./httpService"
import {API} from "../config.json"
import {T_UserSchema_For_API} from "./schema/T_UserSchema"
import useAuthorization from "../app/hooks/useAuthorization"

export default async ({firstName, lastName, password, email}: T_UserSchema_For_API) => {
	const payload = {
		email: email,
		password: password,
	}
	const promise = await httpService().post(API.LOGIN, payload, {
		headers: useAuthorization()
	})
	const response = await promise
	console.log(response)
	return response
}
