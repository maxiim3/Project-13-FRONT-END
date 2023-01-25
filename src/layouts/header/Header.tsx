import React, {useState} from "react"
import $nav from "./header.module.css"
import {NavLink} from "react-router-dom"
import $shared from "../../shared/shared.module.css"

export default () => {
	const [isConnected, setIsConnected] = useState(false)

	return (
		<header>
			<nav className={$nav.container}>
				<NavLink className={$nav.logoWrapper} to="/">
					<img
						src="/img/argentBankLogo.png"
						alt="Argent Bank Logo"
					/>
					<h1 className={$shared.screenReadersOnly}>Argent Bank</h1>
				</NavLink>
				<div>
					{
						isConnected ?
						(<>
							<NavLink className={$nav.navLinks} to="/user">
								<i className="fa fa-user-circle"></i>
								Tony
							</NavLink>
							<NavLink className={$nav.navLinks} to="/user"
									 onClick={e => {
										 e.preventDefault()
										 setIsConnected(false)
									 }}>
								<i className="fa fa-sign-out"></i>
								Sign Out
							</NavLink>
						</>)
									:
						(<>
							<NavLink className={$nav.navLinks} to="/sign-in"
									 onClick={e => {
										 e.preventDefault()
										 setIsConnected(true)
									 }}>
								<i className="fa fa-user-circle"></i>
								Sign In
							</NavLink>
						</>)
					}

				</div>
			</nav>
		</header>
	)
}