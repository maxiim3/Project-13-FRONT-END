import {NavLink} from "react-router-dom"
import $nav from "../sass/header.module.css"
import React, {ReactElement} from "react"

export const LinkFactory = (props: {
	innerContent?: string | ReactElement
	path: string
	icon?: string
	className?: any
	onClick?: any
}) => {
	return (
		<NavLink
			onClick={e => {
				if (props.onClick) {
					e.preventDefault()
					props.onClick()
				}
			}}
			role={"link"}
			aria-current={"page"}
			aria-label={`Link to ${props.path.split("/")[1] || "home"}`}
			className={props.className || $nav.navLinks}
			to={props.path}>
			{props.icon && <i className={`fa ${props.icon}`} />}
			{props.innerContent}
		</NavLink>
	)
}
