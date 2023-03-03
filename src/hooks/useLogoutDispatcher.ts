import {useDispatch} from "react-redux"
import {SetUser} from "../store/actions/setUser"
import {SetAuth} from "../store/actions/setAuth"

/**
 * # UseLogoutDispatcher
 * @description Hook to log transactions out. Uses dispatch and action creators to clear local storage and set transactions to null.
 * @return {{logUserOut: () => void}}
 */
export function useLogoutDispatcher() {
	const dispatch = useDispatch()

	const logUserOut = () => {
		localStorage.clear()
		dispatch(SetUser(null))
		dispatch(SetAuth(false))
	}

	return {logUserOut}
}