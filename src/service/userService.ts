import httpService from "./httpService"
import {API} from "../config.json"
import useAuthorization from "../hooks/useAuthorization"
import {T_UserSchema_For_API} from "../types/T_UserSchema"

type T_PayloadToUpdateUser = {
	firstName?: string
	lastName?: string
}
/**
 * #userService
 * @description userService encapsulates all the API methods related to the API
 * @type {{registerNewUser: ({firstName, lastName, password, email}: T_UserSchema_For_API) => Promise<any>, getAllUsers: () => Promise<any>, updateUser: (payload: T_PayloadToUpdateUser) => Promise<any>, getUserProfile: (token?: string) => Promise<any>, logInUser: (props: {email: string, password: string}) => Promise<axios.AxiosResponse<any>>}}
 */
const userService = {
	updateUser: async (payload: T_PayloadToUpdateUser) => {
		const promise = await httpService().put(API["GET_&_UPDATE_USER"], payload, {
			headers: useAuthorization(),
		})
		const response = await promise
		console.log(response)
		return response
	},
	registerNewUser: async ({firstName, lastName, password, email}: T_UserSchema_For_API) => {
		const payload = {
			email: email,
			password: password,
		}
		const promise = await httpService().post(API.LOGIN, payload, {
			headers: useAuthorization(),
		})
		const response = await promise
		console.log(response)
		return response
	},
	getUserProfile: async (token?: string) => {
		const url = API["GET_&_UPDATE_USER"]

		const promise = await httpService().post(url, null, {headers: useAuthorization(token)})
		const response = await promise

		return response
	},
	getAllUsers: async () => {
		const promise = await httpService().get(API.GET_USERS, {headers: useAuthorization()})
		const response = await promise
		console.log(response)
		return response
	},
	logInUser: async (props: {email: string; password: string}) => {
		const payload = {
			email: props.email,
			password: props.password,
		}
		const promise = await httpService().post(API.LOGIN, payload)
		return promise
	},
}

export default userService
