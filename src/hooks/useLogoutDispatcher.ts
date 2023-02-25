import {useDispatch} from "react-redux"
import {A_SetAuth, A_SetUser} from "../store/store"

/**
 * # UseLogoutDispatcher
 * @description Hook to log user out. Uses dispatch and action creators to clear local storage and set user to null.
 * @return {{logUserOut: () => void}}
 */
export function useLogoutDispatcher() {
	const dispatch = useDispatch()

	const logUserOut = () => {
		localStorage.clear()
		dispatch(A_SetUser(null))
		dispatch(A_SetAuth(false))
	}

	return {logUserOut}
}