import $nav from "../sass/header.module.css"
import {PATH} from "../../../../config.json"
import $sro from "../../../stylesheet/sro.module.scss"
import React from "react"
import {LinkFactory} from "../factory/LinkFactory"

export function LogoLink() {
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
