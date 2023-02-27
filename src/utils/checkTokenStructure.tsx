/**
 * # tokenStructure
 * @description Checks if token is valid. Returns true if valid, throws error-page if invalid.
 * @param token | null
 * @return {boolean}
 */
export const checkTokenStructure = (token: string) => {
	const tokenPart = token.split(".")
	if (tokenPart.length !== 3) {
		throw new Error("Token structure is invalid")
	}

	return token
}