import {Builder} from "./Builder"
import {PATH} from "../../../config.json"
import React from "react"

export const LoginLink = () => {
	return (
		<Builder
			icon={"fa-user-circle"}
			path={PATH.LOGIN}
			innerContent={"Sign In"}
		/>
	)
}