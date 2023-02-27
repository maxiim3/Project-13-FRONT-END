import {T_AuthSlice} from "../../types/t_AuthSlice"
import getUserProfile from "../../../api/getUserProfile"
import {pipe} from "../../../utils/pipe"
import {initialState} from "../state/initialState"
import {getTokenFromSessionStorage} from "../../../utils/getTokenFromSessionStorage"
import {checkTokenStructure} from "../../../utils/checkTokenStructure"
import {decodeToken} from "../../../utils/decodeToken"

/**
 * # handleAuthOnLoad
 * @description:
 * 	- **Handle the auth state of the store when user land on the app.**
 * 	- 1. check for token in the session storage
 * 	- 2. will proceed to validation of the token
 * 	- 3. if token is valid then user is fetched from api and initiated in the store.
 * 	- 4. finally the store is updated.
 * @return {Promise<T_AuthSlice>}
 */
export const handleAuthOnLoad = async (): Promise<T_AuthSlice> => {
	const noUser = {auth: initialState}
	try {
		const token = pipe([checkTokenStructure, decodeToken], getTokenFromSessionStorage()) // return token or an error using pipe function composition
		console.log(token)
		const response = await getUserProfile()
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
