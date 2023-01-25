import React from "react"
import {NavLink} from "react-router-dom"
import $nav from "./header.module.css"
import $shared from "../../stylesheets/shared.module.css"
import {SwitchUserNavLink} from "./SwitchUserNavLink"
import {PATHS} from "../../routes/config/PATHS"

export default () => {
	return (
		<header>
			<nav className={$nav.container}>
				<NavLink className={$nav.logoWrapper} to={PATHS.HOME}>
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

