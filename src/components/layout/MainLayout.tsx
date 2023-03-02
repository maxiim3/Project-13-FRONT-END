import React, {ReactElement} from "react"
import {MainNavBar} from "../header/MainNavBar"
import {Footer} from "../footer/Footer"
import $layout from "./layout.module.css"
import {Outlet} from "react-router-dom"

export const MainLayout = () => (
	<div className={$layout.wrapper}>
		<MainNavBar />
		<Outlet/>
		<Footer />
	</div>
)