import {useDispatch} from "react-redux"
import {A_SetAuth, A_SetUser} from "../store/store"

export function useLogUserOut() {
	const dispatch = useDispatch()

	const logUserOut = () => {
		localStorage.clear()
		dispatch(A_SetUser(null))
		dispatch(A_SetAuth(false))
	}

	return {logUserOut}
}