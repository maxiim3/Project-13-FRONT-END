export default () => {
	return {
		authorization: "Bearer " + localStorage.getItem("token"),
	}
}
