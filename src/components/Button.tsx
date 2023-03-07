import React, {MouseEvent, ReactNode} from "react"
import $profile from "../sass/profile.module.scss"
import PropTypes from "prop-types"
import {T_ButtonProps} from "../types/T_ButtonProps"

/**
 * # Button
 * @description A button component that can be used to trigger actions.
 * @param {string | undefined} appliedStyle
 * @param {((e: React.MouseEvent) => void) | undefined} onClick
 * @param {string} text
 * @param {string | undefined} ariaLabelProp
 * @param {string | undefined} ariaDescriptionProp
 * @param {React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | Iterable<React.ReactNode> | React.ReactPortal | boolean | null | undefined} children
 * @return {JSX.Element}
 */
export function Button({
	appliedStyle,
	onClick,
	text,
	ariaLabelProp,
	ariaDescriptionProp,
	children,
}: T_ButtonProps) {
	return (
		<button
			role={"button"}
			aria-label={ariaLabelProp || `${text} button`}
			aria-description={ariaDescriptionProp || text}
			className={appliedStyle || $profile.button}
			onClick={onClick}>
			{text}
			{children}
		</button>
	)
}

/*Prop Types*/
Button.propTypes = {
	text: PropTypes.string.isRequired,
	ariaLabelProp: PropTypes.string,
	ariaDescriptionProp: PropTypes.string,
	appliedStyle: PropTypes.string,
	onClick: PropTypes.func,
	children: PropTypes.node,
}
