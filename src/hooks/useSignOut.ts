import {useLogoutDispatcher} from "./useLogoutDispatcher"
import {useNavigate} from "react-router-dom"
import React, {useCallback} from "react"
import {PATH} from "../config.json"

/**
 * # useSignOut
 * @description Hook that handle the logout event
 * @return {{handleLogOut: (e: React.MouseEvent<HTMLButtonElement>) => void}}
 */
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