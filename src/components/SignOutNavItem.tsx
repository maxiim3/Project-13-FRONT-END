import React from "react"
import {PATH} from "../config.json"
import {LinkFactory} from "./LinkFactory"
import {useSignOut} from "../hooks/useSignOut"

export const SignOutNavItem = () => {
	const {handleLogOut} = useSignOut()

	return (
		<LinkFactory
			icon={"fa-sign-out"}
			path={PATH.LOGIN}
			innerContent={"Sign Out"}
			onClick={handleLogOut}
		/>
	)
}
