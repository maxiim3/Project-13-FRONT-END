import React from "react"
import {Navigate, NavLink, useNavigate} from "react-router-dom"
import $nav from "./header.module.css"
import {PATHS} from "../../routes/config/PATHS"
import {authSlicer} from "../../store/auth"
import {useDispatch, useSelector} from "react-redux"

export const SwitchUserNavLink = () => {
	const {user} = useSelector((state: any) => state.user)


	const {auth} = useSelector((state: any) => state.auth)


	console.log(auth)


	switch (auth.isConnected) {
		case true:
			return (
				<div>
					<NavigationLinks
						icon={"fa-user-circle"}
						path={PATHS.PROFILE}
						text={user.firstName} />
					<SignOut />
				</div>
			)
		case false:
			return (
				<div>
					<NavigationLinks
						icon={"fa-user-circle"}
						path={PATHS.LOGIN}
						text={"Sign In"} />
				</div>
			)
		default:
			return <Navigate to={PATHS.ERROR} />
	}
}

const NavigationLinks = (props: {text: string, path: string, icon: string}) =>
{
	return (<NavLink className={$nav.navLinks} to={props.path}>
		<i className={`fa ${props.icon}`}></i>
		{props.text}
	</NavLink>)
}
const SignOut = () => {
	const {setStatus} = authSlicer.actions
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const handleLogOut = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault()
		dispatch(setStatus(false))
		navigate(PATHS.LOGIN)
	}

	return (<NavLink className={$nav.navLinks} to={PATHS.LOGIN} onClick={handleLogOut}>
		<i className={`fa fa-sign-out`}></i>
		Sign Out
	</NavLink>)
}