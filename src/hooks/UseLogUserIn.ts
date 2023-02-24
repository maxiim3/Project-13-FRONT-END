import {useDispatch} from "react-redux"
import {T_UserSchema_From_API} from "../api/schema/T_UserSchema"
import {A_SetAuth, A_SetUser} from "../store/store"

export function useLogUserIn() {
	const dispatch = useDispatch()

	const logUserIn = (user: T_UserSchema_From_API) => {
		dispatch(A_SetUser(user))
		dispatch(A_SetAuth(true))
	}

	return {logUserIn}
}