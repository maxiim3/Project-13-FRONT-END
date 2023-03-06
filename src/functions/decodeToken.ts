import jwtDecode from "jwt-decode"
import {T_DecodedToken} from "../types/T_DecodedToken"

/**
 * # Decode Token
 * @description Decodes the token and returns the token
 * @param {string} token
 * @return {string}
 */
export const decodeToken = (token: string) => {
	const decoded = jwtDecode(token) as T_DecodedToken
	if (!decoded.id) throw new Error("Token has no property [id]")
	return token
}