import {useNavigate} from "react-router-dom"
import React, {useCallback} from "react"
import {PATH} from "../../../config.json"
import {Builder} from "./Builder"
import {useLogoutDispatcher} from "../../../hooks/useLogoutDispatcher"

export const SignOutLink = () => {
	const {logUserOut} = useLogoutDispatcher()
	const navigate = useNavigate()
	const handleLogOut = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
		// e.preventDefault()
		logUserOut()
		navigate(PATH.HOME)
	}, [])

	return (
		<Builder
			icon={"fa-sign-out"}
			path={PATH.LOGIN}
			innerContent={"Sign Out"}
			onClick={handleLogOut}
		/>
	)
}
