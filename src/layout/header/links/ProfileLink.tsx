import {T_UserSchema_From_API} from "../../../api/schema/T_UserSchema"
import {Builder} from "./Builder"
import {PATH} from "../../../config.json"
import React from "react"

export const ProfileLink = ({user}: {user: T_UserSchema_From_API}) => {
	return (
		<Builder
			icon={"fa-user-circle"}
			path={PATH.PROFILE}
			innerContent={user.firstName}
		/>
	)
}