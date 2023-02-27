import React from "react"
import $nav from "./sass/header.module.css"
import {LogoLink} from "./components/LogoLink"
import {useSelector} from "react-redux"
import {ProfileLink} from "./components/ProfileLink"
import {SignOutLink} from "./components/SignOutLink"
import {LoginLink} from "./components/LoginLink"

export const Header = () => {
	const {auth} = useSelector((state: any) => state)
	return (
		<header>
			<nav
				role={"navigation"}
				aria-label={"menu"}
				className={$nav.container}>
				<LogoLink />
				{auth.isConnected ? (
					<div tabIndex={-1}>
						<ProfileLink user={auth.user} />
						<SignOutLink />
					</div>
				) : (
					<div tabIndex={-1}>
						<LoginLink />
					</div>
				)}
			</nav>
		</header>
	)
}
