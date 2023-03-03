import React, {ReactElement} from "react"
import {MainNavBar} from "./MainNavBar"
import {Footer} from "../components/Footer"
import $layout from "../shared/layout.module.css"
import {Outlet} from "react-router-dom"

export const MainLayout = () => (
	<div className={$layout.wrapper}>
		<MainNavBar />
		<Outlet/>
		<Footer />
	</div>
)