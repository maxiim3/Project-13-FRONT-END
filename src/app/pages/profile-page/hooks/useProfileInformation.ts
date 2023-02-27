import {useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"

export const useProfileInformation = () => {
	const {auth} = useSelector((state: any) => state)
	const navigate = useNavigate()

	return {isConnected: auth.isConnected, user: auth.user, navigate}
}