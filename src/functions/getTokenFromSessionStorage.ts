/**
 * # getTokenFromSessionStorage
 * @description	Returns the token from session storage
 * @return {string}
 */
export const getTokenFromSessionStorage = () => {
	const token = localStorage.getItem("token")
	if (!token) throw new Error("No token in session Storage")

	return token
}
