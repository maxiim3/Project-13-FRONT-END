/**
 * # useAuthorization
 * @description Hook to return authorization header for axios requests.
 * @file useAuthorization.ts
 * @param {string|| null}  token
 * @return {{authorization: string}}
 */
export default (token?: string) => {
	return {
		authorization: `Bearer ${token || localStorage.getItem("token")}`,
	}
}
