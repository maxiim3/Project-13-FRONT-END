import {useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"
import {useMemo} from "react"

/**
 * # useStoreState
 * @description Hook that handle the state of the Store
 * @return {{navigate: NavigateFunction, isConnected: any, user: any}}
 */
export const useStoreState = () => {
	const {auth} = useSelector((state: any) => state)
	const navigate = useNavigate()
	const user = useMemo(() => auth.user, [auth.user])

	return {isConnected: auth.isConnected, user, navigate}
}
