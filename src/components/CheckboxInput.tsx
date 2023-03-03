import {T_InputFactory} from "../types/T_InputFactory"
import React from "react"

export const CheckboxInput = ({
								  input,
								  value,
								  onChange,
							  }: {
	input: T_InputFactory.InputModel
	value: string
	onChange: (e: any) => void
}) => (
	<input
		type="checkbox"
		id={input.id}
		onChange={onChange}
		minLength={input.minLength}
		value={value}
		role={"type"}
		aria-label={"Remember Me"}
		inputMode={"none"}
		autoComplete={"off"}
		aria-description={"Check this case to remember my login information on next connection"}
	/>
)