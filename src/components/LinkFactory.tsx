import {NavLink} from "react-router-dom"
import $nav from "../shared/navigation.module.css"
import React, {ReactElement} from "react"
import PropTypes from "prop-types"

/**
 * # LinkFactory
 * @description A factory function that returns a link component.
 * @param {object} props
 * @param {string|React.ReactElement} [props.innerContent] - The content of the link.
 * @param {string} props.path - The URL to link to.
 * @param {string} [props.icon] - The class name of an icon to include.
 * @param {string} [props.className] - The class name of the container element.
 * @param {function} [props.onClick] - A function to call when the link is clicked.
 * @returns {JSX.Element}
 */
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

LinkFactory.propTypes = {
	innerContent: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
	path: PropTypes.string.isRequired,
	icon: PropTypes.string,
	className: PropTypes.string,
	onClick: PropTypes.func,
}
