import {useDispatch} from "react-redux"
import {T_UserSchema_From_API} from "../types/T_UserSchema"
import {SetUser} from "../store/actions/setUser"
import {SetAuth} from "../store/actions/setAuth"

/**
 * # UseLoginDispatcher
 * @description Hook to log transactions in. Uses dispatch and action creators to set transactions and login-page to true.
 * @return {{logUserIn: (transactions: T_UserSchema_From_API) => void}}
 * @param transactions
 * @example const {logUserIn} = useLoginDispatcher()
 * @example logUserIn(transactions)
 */
export function useLoginDispatcher() {
	const dispatch = useDispatch()

	const logUserIn = (user: T_UserSchema_From_API) => {
		dispatch(SetUser(user))
		dispatch(SetAuth(true))
	}

	return {logUserIn}
}
