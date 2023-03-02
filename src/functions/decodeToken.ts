import jwtDecode from "jwt-decode"
import {T_DecodedToken} from "../types/t_DecodedToken"

export const decodeToken = (token: string) => {
	const decoded = jwtDecode(token) as T_DecodedToken
	if (!decoded.id) throw new Error("Token has no property [id]")
	return token
}