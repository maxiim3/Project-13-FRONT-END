import {T_AuthSlice} from "../types/T_AuthSlice"
import {pipe} from "./pipe"
import {initialAuthState} from "../store/initialAuthState"
import {getTokenFromSessionStorage} from "./getTokenFromSessionStorage"
import {checkTokenStructure} from "./checkTokenStructure"
import {decodeToken} from "./decodeToken"
import userService from "../service/userService"

/**
 * # handleAuthOnLoad
 * @description:
 * 	- **Handle the auth state of the store when user land on the app.**
 *    * check for token in the session storage
 *    * will proceed to validation of the token
 *    * if token is valid then user is fetched from service and initiated in the store.
 *    * finally the store is updated.
 * @return {Promise<T_AuthSlice>}
 */
export const handleAuthOnLoad = async (): Promise<T_AuthSlice> => {
	const noUser = {auth: initialAuthState}
	try {
		const token = pipe([checkTokenStructure, decodeToken], getTokenFromSessionStorage()) // return token or an error using pipe function composition
		const response = await userService.getUserProfile()
		const user = response.data.body
		return {
			auth: {
				isConnected: true,
				user: user,
			},
		}
	} catch (error) {
		console.error("Error fetching user profile:", error)
		localStorage.clear()
		return noUser
	}
}
