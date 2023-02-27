import {useLogoutDispatcher} from "../../../../store/hooks/useLogoutDispatcher"
import {useNavigate} from "react-router-dom"
import React, {useCallback} from "react"
import {PATH} from "../../../../config.json"

export const useSignOut = () => {
	const {logUserOut} = useLogoutDispatcher()
	const navigate = useNavigate()
	const handleLogOut = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
		// e.preventDefault()
		logUserOut()
		navigate(PATH.HOME)
	}, [])

	return {handleLogOut}
}