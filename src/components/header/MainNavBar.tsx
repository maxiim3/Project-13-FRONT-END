import React from "react"
import $nav from "./navigation.module.css"
import {LogoNavItem} from "./LogoNavItem"
import {useSelector} from "react-redux"
import {ProfileNavItem} from "./ProfileNavItem"
import {SignOutNavItem} from "./SignOutNavItem"
import {LoginNavItem} from "./LoginNavItem"

export const MainNavBar = () => {
	const {auth} = useSelector((state: any) => state)
	return (
		<header>
			<nav
				role={"navigation"}
				aria-label={"menu"}
				className={$nav.container}>
				<LogoNavItem />
				{auth.isConnected ? (
					<div tabIndex={-1}>
						<ProfileNavItem user={auth.user} />
						<SignOutNavItem />
					</div>
				) : (
					<div tabIndex={-1}>
						<LoginNavItem />
					</div>
				)}
			</nav>
		</header>
	)
}
