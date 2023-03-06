import React from "react"
import {HeaderBannerNav} from "../components/HeaderBannerNav"
import $layout from "../shared/layout.module.css"
import {Outlet} from "react-router-dom"
import $footer from "../shared/footer.module.scss"

/**
 * # MainLayout
 * @description Main layout for the app. Provides the header, footer, and outlet for the router
 * @return {JSX.Element}
 * @constructor
 */
export const MainLayout = () => (
	<div className={$layout.wrapper}>
		<HeaderBannerNav />
		<Outlet/>
		<footer className={$footer.container}>
			<p>Copyright 2020 Argent Bank</p>
		</footer>
	</div>
)