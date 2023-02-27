import {LinkFactory} from "../factory/LinkFactory"
import {PATH} from "../../../../config.json"
import React from "react"

export const LoginLink = () => {
	return (
		<LinkFactory
			icon={"fa-profile-page-circle"}
			path={PATH.LOGIN}
			innerContent={"Sign In"}
		/>
	)
}