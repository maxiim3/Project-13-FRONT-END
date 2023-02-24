import React, {ReactElement} from "react"
import {Header} from "./header/Header"
import {Footer} from "./footer/Footer"
import $layout from "./layout.module.css"

export const LayoutWrapper = ({children}: {children: JSX.Element}) => (
	<div className={$layout.wrapper}>
		<Header />
		{children}
		<Footer />
	</div>
)