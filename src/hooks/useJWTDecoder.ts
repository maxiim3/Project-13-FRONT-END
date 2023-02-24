import jwtDecode from "jwt-decode"

export function useJWTDecoder(token: string) {
	try {
		if (!checkToken(token)) {
			throw new Error("Token is invalid")
		}
		const decodedToken = jwtDecode(token)
		return {token: decodedToken}
	} catch (e) {
		return {token: null}
	}
}

function checkToken(token: string) {
	const tokenPart = token.split(".")
	if (tokenPart.length !== 3) {
		localStorage.clear()
		throw new Error("Token is invalid")
	}

	return true
}
