import $nav from "../sass/header.module.css"
import {PATH} from "../../../config.json"
import $shared from "../../../sass/shared.module.css"
import React from "react"
import {Builder} from "./Builder"

export function LogoLink() {
	return (
		<Builder
			className={$nav.logoWrapper}
			path={PATH.HOME}
			innerContent={
				<>
					<img
						src="/img/argentBankLogo.png"
						alt="Argent Bank Logo"
					/>
					<h1 className={$shared.screenReadersOnly}>Argent Bank</h1>
				</>
			}
		/>
	)
}
