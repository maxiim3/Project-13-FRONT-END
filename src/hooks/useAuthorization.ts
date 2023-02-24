export default (token?: string) => {
	return {
		authorization: `Bearer ${token || localStorage.getItem("token")}`,
	}
}
