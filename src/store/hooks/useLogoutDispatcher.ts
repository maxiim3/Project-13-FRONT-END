import {useDispatch} from "react-redux"
import {SetUser} from "../auth/actions/SetUser"
import {SetAuth} from "../auth/actions/setAuth"

/**
 * # UseLogoutDispatcher
 * @description Hook to log profile-page out. Uses dispatch and action creators to clear local storage and set profile-page to null.
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