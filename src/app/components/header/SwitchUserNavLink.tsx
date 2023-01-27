import React from "react"
import {Navigate, NavLink, useNavigate} from "react-router-dom"
import $nav from "./header.module.css"
import {ErrorRoute, LoginRoute, ProfileRoute} from "../../routes/routes"
import {authSlicer} from "../../store/auth"
import {useDispatch} from "react-redux"
import useMockedUser from "../../../static/mocks/useMockedUser"
import useMockedAuth from "../../../static/mocks/useMockedAuth"

export const SwitchUserNavLink = () => {
	// const {user} = useSelector((state: any) => state.user)
	//
	// const {auth} = useSelector((state: any) => state.auth)

	const user = useMockedUser(0)
	const auth = useMockedAuth(false)

	switch (auth.isConnected) {
		case true:
			return (
				<div>
					<NavigationLinks
						icon={"fa-user-circle"}
						path={ProfileRoute.path}
						text={user.firstName}
					/>
					<SignOut />
				</div>
			)
		case false:
			return (
				<div>
					<NavigationLinks
						icon={"fa-user-circle"}
						path={LoginRoute.path}
						text={"Sign In"}
					/>
				</div>
			)
		default:
			return <Navigate to={ErrorRoute.path} />
	}
}

const NavigationLinks = (props: {text: string; path: string; icon: string}) => {
	return (
		<NavLink
			className={$nav.navLinks}
			to={props.path}>
			<i className={`fa ${props.icon}`}></i>
			{props.text}
		</NavLink>
	)
}
const SignOut = () => {
	const {logOutUser} = authSlicer.actions
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const handleLogOut = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault()
		dispatch(logOutUser)
		navigate(LoginRoute.path)
	}

	return (
		<NavLink
			className={$nav.navLinks}
			to={LoginRoute.path}
			onClick={handleLogOut}>
			<i className={`fa fa-sign-out`}></i>
			Sign Out
		</NavLink>
	)
}
