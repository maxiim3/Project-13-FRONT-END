import {LinkFactory} from "./LinkFactory"
import {PATH} from "../config.json"
import React from "react"

export const LoginNavItem = () => {
	return (
		<LinkFactory
			icon={"fa-transactions-circle"}
			path={PATH.LOGIN}
			innerContent={"Sign In"}
		/>
	)
}

