import React, {ReactNode, useEffect, useState} from "react"
import $style from "../shared/main.module.scss"
import PropTypes from "prop-types"

type T_MainContainer = {
	children: ReactNode
	ariaDescription?: string
	ariaLabel?:
		| "Home Page"
		| "Sign In Page"
		| "User Profile Page"
		| "Error Page"
		| "Transaction Page"
}

/**
 * # MainContainer
 * @description Main container for the app
 * @param {JSX.Element | JSX.Element[]} children - The children to be rendered inside the main container.
 * @param {"Home Page" | "Sign In Page" | "User Profile Page" | "Error Page" | "Transaction Page" | undefined} ariaLabel - The label describing the current page for accessibility.
 * @param {string | undefined} ariaDescription - The description for the main container for accessibility.
 * @returns {JSX.Element} - The main container component.
 *  */
export const MainContainer = ({children, ariaLabel, ariaDescription}: T_MainContainer) => {
	const [isCurrentPage, setIsCurrentPage] = useState(false)

	useEffect(() => {
		setIsCurrentPage(true)
		return () => setIsCurrentPage(false)
	}, [])

	return (
		<main
			className={$style.mainContainer}
			role={"main"}
			tabIndex={-1}
			id={"main"}
			aria-current={isCurrentPage && "page"}
			aria-describedby={ariaDescription}
			aria-label={ariaLabel}>
			{children}
		</main>
	)
}

MainContainer.propTypes = {
	children: PropTypes.node.isRequired,
	ariaLabel: PropTypes.oneOf([
		"Home Page",
		"Sign In Page",
		"User Profile Page",
		"Error Page",
		"Transaction Page",
		undefined,
	]),
	ariaDescription: PropTypes.string,
}
