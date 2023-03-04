import React, {MouseEvent, ReactNode} from "react"
import $profile from "../shared/profile.module.scss"

type ButtonProps = {
	appliedStyle?: string
	text: string
	onClick?: (e: MouseEvent) => void
	ariaLabelProp?: string
	ariaDescriptionProp?: string
	children?: ReactNode
}

export function Button({appliedStyle, onClick, text, ariaLabelProp, ariaDescriptionProp, children}: ButtonProps) {
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