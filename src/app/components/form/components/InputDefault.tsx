import {T_InputFactory} from "../types/T_InputFactory"
import React from "react"

export const InputDefault = ({
	input,
	value,
	onChange,
}: {
	input: T_InputFactory.InputModel
	value: string
	onChange: (e: any) => void
}) => (
	<input
		minLength={input.minLength}
		aria-roledescription={input.label}
		role={input.label}
		type={input.inputType}
		inputMode={
			input.inputType === "email"
				? "email"
				: input.inputType === "number"
				? "numeric"
				: "text"
		}
		required={true}
		autoComplete={
			input.inputType === "email"
				? "email"
				: input.inputType === "password"
				? "current-password"
				: "on"
		}
		placeholder={input.placeholder}
		aria-placeholder={input.placeholder}
		min={0}
		value={value}
		id={input.id}
		onChange={onChange}
	/>
)
