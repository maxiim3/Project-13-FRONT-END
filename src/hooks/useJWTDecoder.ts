import jwtDecode from "jwt-decode"

/**
 * # useJWTDecoder
 * @description Hook to decode JWT token. Returns decoded token or null if token is invalid.
 * @return {{token: any | null}}
 * @param token | null
 * @example const {token} = useJWTDecoder(token)
 */
export function useJWTDecoder(token: string) {
	try {
		if (!checkToken(token)) {
			throw new Error("Token is invalid")
		}
		const decodedToken = jwtDecode(token) // Decodes token
		return {token: decodedToken}
	} catch (e) {
		return {token: null}
	}
}

/**
 * # checkToken
 * @description Checks if token is valid. Returns true if valid, throws error if invalid.
 * @param token | null
 * @return {boolean}
 */
function checkToken(token: string) {
	const tokenPart = token.split(".")
	if (tokenPart.length !== 3) {
		localStorage.clear()
		throw new Error("Token is invalid")
	}

	return true
}
