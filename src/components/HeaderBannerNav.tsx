import React from "react"
import $nav from "../sass/navigation.module.css"
import {useSelector} from "react-redux"
import {LinkFactory} from "./LinkFactory"
import {PATH} from "../config.json"
import {useSignOut} from "../hooks/useSignOut"
import $sro from "../sass/sro.module.scss"
import {FaSignOutAlt, FaUserCircle} from "react-icons/all"

/**
 * # HeaderBannerNav
 * @description Main Header Banner Component. Encapsulate the logo and the navigation links.
 * It's links are different depending on the user's connection status.
 * @return {JSX.Element}
 * @constructor
 */
export const HeaderBannerNav = () => {
	const {auth} = useSelector((state: any) => state)
	const {handleLogOut} = useSignOut()

	return (
		<header
			role={"banner"}
			aria-level={1}>
			<nav
				role={"navigation"}
				aria-label={"menu"}
				className={$nav.container}>
				<LinkFactory
					className={$nav.logoWrapper}
					path={PATH.HOME}
					innerContent={
						<>
							<img
								src="/img/argentBankLogo.png"
								alt="Argent Bank Logo"
							/>
							<h1 className={$sro.screenReadersOnly}>Argent Bank</h1>
						</>
					}
				/>
				{(() => {
					if (auth.isConnected) {
						return (
							<div
								tabIndex={-1}
								className={$nav.rightSideLinks}>
								<LinkFactory
									icon={<FaUserCircle/>}
									path={PATH.PROFILE}
									innerContent={auth.user.firstName}
								/>
								<LinkFactory
									icon={<FaSignOutAlt/>}
									path={PATH.LOGIN}
									innerContent={"Sign Out"}
									onClick={handleLogOut}
								/>
							</div>
						)
					}
					return (
						<div tabIndex={-1}>
							<LinkFactory
								icon={<FaUserCircle/>}
								path={PATH.LOGIN}
								innerContent={"Sign In"}
							/>
						</div>
					)
				})()}
			</nav>
		</header>
	)
}
