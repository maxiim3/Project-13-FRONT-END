import React from "react"
import $nav from "./sass/header.module.css"
import {LogoLink} from "./links/LogoLink"
import {useSelector} from "react-redux"
import {ProfileLink} from "./links/ProfileLink"
import {SignOutLink} from "./links/SignOutLink"
import {LoginLink} from "./links/LoginLink"

export const Header = () => {
	const {auth} = useSelector((state: any) => state)
	return (
		<header>
			<nav className={$nav.container}>
				<LogoLink />
				{auth.isConnected ? (
					<div>
						<ProfileLink user={auth.user} />
						<SignOutLink />
					</div>
				) : (
					<div>
						<LoginLink />
					</div>
				)}
			</nav>
		</header>
	)
}
