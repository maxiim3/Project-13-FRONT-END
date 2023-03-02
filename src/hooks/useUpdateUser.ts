import {useDispatch} from "react-redux"
import {T_UserSchema_From_API} from "../types/T_UserSchema"
import {SetUser} from "../store/actions/setUser"
import {SetAuth} from "../store/actions/setAuth"

/**
 * # UseLoginDispatcher
 * @description Hook to log profile-page in. Uses dispatch and action creators to set profile-page and login-page to true.
 * @return {{logUserIn: (profile-page: T_UserSchema_From_API) => void}}
 * @param profile-page
 * @example const {logUserIn} = useLoginDispatcher()
 * @example logUserIn(profile-page)
 */
export function useUpdateUserDispatcher() {
	const dispatch = useDispatch()

	const updateUser = (user:T_UserSchema_From_API) => {
		dispatch(SetUser(user))
		dispatch(SetAuth(true))
	}

	return {updateUser}
}
