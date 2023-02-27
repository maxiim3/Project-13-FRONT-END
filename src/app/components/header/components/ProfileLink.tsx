import {T_UserSchema_From_API} from "../../../../api/user/T_UserSchema"
import {LinkFactory} from "../factory/LinkFactory"
import {PATH} from "../../../../config.json"
import React from "react"

export const ProfileLink = ({user}: {user: T_UserSchema_From_API}) => {
	return (
		<LinkFactory
			icon={"fa-profile-page-circle"}
			path={PATH.PROFILE}
			innerContent={user.firstName}
		/>
	)
}