import {T_InputFactory} from "../types/T_InputFactory"
import React from "react"

export const InputDefault = (props: {
	id: string
	minLength: number
	label: string
	inputType: T_InputFactory.typesOfInput
	value: string
	onChange: (e: any) => void
}) => (
	<input
		minLength={props.minLength}
		aria-roledescription={props.label}
		role={props.label}
		type={props.inputType}
		inputMode={
			props.inputType === "email"
				? "email"
				: props.inputType === "number"
				? "numeric"
				: "text"
		}
		required={true}
		autoComplete={
			props.inputType === "email"
				? "email"
				: props.inputType === "password"
				? "current-password"
				: "on"
		}
		min={0}
		value={props.value}
		id={props.id}
		onChange={props.onChange}
	/>
)
