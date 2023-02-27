import {useDispatch} from "react-redux"
import {T_UserSchema_From_API} from "../../api/schema/T_UserSchema"
import {A_SetAuth, A_SetUser} from "../../store/store"

/**
 * # UseLoginDispatcher
 * @description Hook to log profile-page in. Uses dispatch and action creators to set profile-page and login-page to true.
 * @return {{logUserIn: (profile-page: T_UserSchema_From_API) => void}}
 * @param profile-page
 * @example const {logUserIn} = useLoginDispatcher()
 * @example logUserIn(profile-page)
 */
export function useLoginDispatcher() {
	const dispatch = useDispatch()

	const logUserIn = (user: T_UserSchema_From_API) => {
		dispatch(A_SetUser(user))
		dispatch(A_SetAuth(true))
	}

	return {logUserIn}
}
