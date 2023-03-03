import React, {MouseEvent} from "react"
import $profile from "../shared/profile.module.scss"

type ButtonProps = {
	appliedStyle?: string
	text: string
	onClick?: (e: MouseEvent) => void
	ariaLabelProp?: string
	ariaDescriptionProp?: string
}

export function Button({appliedStyle, onClick, text, ariaLabelProp, ariaDescriptionProp}: ButtonProps) {
	return (
		<button
			role={"button"}
			aria-label={ariaLabelProp || `${text} button`}
			aria-description={ariaDescriptionProp || text}
			className={appliedStyle || $profile.button}
			onClick={onClick}>
			{text}
		</button>
	)
}