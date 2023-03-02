import React, {useEffect, useState} from "react"
import $style from "./main.module.scss"

type T_MainContainer = {
	children: JSX.Element | JSX.Element[]
	ariaDescription?: string
	ariaLabel?: "Home Page" | "Sign In Page" | "User Profile Page" | "Error Page"
}

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
