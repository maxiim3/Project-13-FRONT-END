import {useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom"
import React, {useCallback} from "react"
import {logUserOut} from "../../../store/store"
import {PATH} from "../../../config.json"
import {Builder} from "./Builder"

export const SignOutLink = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const handleLogOut = useCallback(() => {
		// @ts-ignore
		dispatch(logUserOut())
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
