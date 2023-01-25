import users from "./mockUsers"

const UseMockedUser = (n: 0 | 1) => {
	return users[n]
}

export default UseMockedUser