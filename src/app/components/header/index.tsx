import React from "react"
import {NavLink} from "react-router-dom"
import $nav from "./header.module.css"
import $shared from "../../global/shared.module.css"
import {SwitchUserNavLink} from "./SwitchUserNavLink"
import {HomeRoute} from "../../routes/routes"

export default () => {
	return (
		<header>
			<nav className={$nav.container}>
				<NavLink className={$nav.logoWrapper} to={HomeRoute.path}>
					<img
						src="/img/argentBankLogo.png"
						alt="Argent Bank Logo"
					/>
					<h1 className={$shared.screenReadersOnly}>Argent Bank</h1>
				</NavLink>
				<SwitchUserNavLink />
			</nav>
		</header>
	)
}

