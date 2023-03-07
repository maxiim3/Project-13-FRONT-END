import {NavLink} from "react-router-dom"
import $nav from "../sass/navigation.module.css"
import React, {ReactElement, ReactNode} from "react"
import PropTypes from "prop-types"

/**
 * # LinkFactory
 * @description A factory function that returns a link component.
 * @param {object} props
 * @param {string|React.ReactElement} [props.innerContent] - The content of the link.
 * @param {string} props.path - The URL to link to.
 * @param {React.ReactNode} [props.icon] - An icon to display in the link.
 * @param {string} [props.className] - The class name of the container element.
 * @param {function} [props.onClick] - A function to call when the link is clicked.
 * @returns {JSX.Element}
 */
export const LinkFactory = (props: {
	innerContent?: string | ReactElement
	path: string
	icon?: ReactNode
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
			{props.icon && props.icon}
			{/*{props.icon && <i className={`fa ${props.icon}`} />}*/}
			{props.innerContent}
		</NavLink>
	)
}

LinkFactory.propTypes = {
	innerContent: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
	path: PropTypes.string.isRequired,
	icon: PropTypes.node,
	className: PropTypes.string,
	onClick: PropTypes.func,
}
