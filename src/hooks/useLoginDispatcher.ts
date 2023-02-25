import {useDispatch} from "react-redux"
import {T_UserSchema_From_API} from "../api/schema/T_UserSchema"
import {A_SetAuth, A_SetUser} from "../store/store"

/**
 * # UseLoginDispatcher
 * @description Hook to log user in. Uses dispatch and action creators to set user and auth to true.
 * @return {{logUserIn: (user: T_UserSchema_From_API) => void}}
 * @param user
 * @example const {logUserIn} = useLoginDispatcher()
 * @example logUserIn(user)
 */
export function useLoginDispatcher() {
	const dispatch = useDispatch()

	const logUserIn = (user: T_UserSchema_From_API) => {
		dispatch(A_SetUser(user))
		dispatch(A_SetAuth(true))
	}

	return {logUserIn}
}
