import React, {ReactElement} from "react"
import {Header} from "../../components/header/Header"
import {Footer} from "../../components/footer/Footer"
import $layout from "./layout.module.css"
import {Outlet} from "react-router-dom"

export const LayoutContainer = () => (
	<div className={$layout.wrapper}>
		<Header />
		<Outlet/>
		<Footer />
	</div>
)