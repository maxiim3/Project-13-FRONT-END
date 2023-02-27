export const getTokenFromSessionStorage = () => {
	const token = localStorage.getItem("token")
	if (!token) throw new Error("No token in session Storage")

	return token
}