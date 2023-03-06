import {MouseEvent, ReactNode} from "react"

export type T_ButtonProps = {
	appliedStyle?: string
	text: string
	onClick?: (e: MouseEvent) => void
	ariaLabelProp?: string
	ariaDescriptionProp?: string
	children?: ReactNode
}