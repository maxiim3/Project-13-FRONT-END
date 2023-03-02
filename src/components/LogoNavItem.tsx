import $nav from "../shared/navigation.module.css"
import {PATH} from "../config.json"
import $sro from "../shared/sro.module.scss"
import React from "react"
import {LinkFactory} from "./LinkFactory"

export function LogoNavItem() {
	return (
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
	)
}
