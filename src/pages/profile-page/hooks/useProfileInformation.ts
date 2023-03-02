import {useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"
import {useCallback, useMemo} from "react"

export const useProfileInformation = () => {
	const {auth} = useSelector((state: any) => state)
	const navigate = useNavigate()
	const user = useMemo(() => auth.user, [auth.user])

	return {isConnected: auth.isConnected, user, navigate}
}
