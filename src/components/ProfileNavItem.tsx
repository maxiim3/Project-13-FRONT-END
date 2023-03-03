import {T_UserSchema_From_API} from "../types/T_UserSchema"
import {LinkFactory} from "./LinkFactory"
import {PATH} from "../config.json"
import React from "react"

export const ProfileNavItem = ({user}: {user: T_UserSchema_From_API}) => {
	return (
		<LinkFactory
			icon={"fa-transactions-circle"}
			path={PATH.PROFILE}
			innerContent={user.firstName}
		/>
	)
}