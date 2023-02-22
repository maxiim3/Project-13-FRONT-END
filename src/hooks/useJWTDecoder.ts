import jwtDecode from "jwt-decode"


export function useJWTDecoder() {
	const token = localStorage.getItem("token")
	if (!token) return {token: null}

	const decodedToken = jwtDecode(token)

	return {token: decodedToken}
}
