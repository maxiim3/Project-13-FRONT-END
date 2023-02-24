import {useNavigate} from "react-router-dom"
import React, {useCallback} from "react"
import {PATH} from "../../../config.json"
import {Builder} from "./Builder"
import {useLogUserOut} from "../../../hooks/UseLogUserOut"

export const SignOutLink = () => {
	const {logUserOut} = useLogUserOut()
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
