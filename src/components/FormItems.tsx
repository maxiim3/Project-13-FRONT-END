import React from "react"
import {T_InputFactory} from "../types/T_InputFactory"

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
export const DefaultInput = ({
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
		placeholder={
			input.placeholder.length > 0 ? input.placeholder : `Enter your ${input.inputType}`
		}
		aria-placeholder={
			input.placeholder.length > 0 ? input.placeholder : `Enter your ${input.inputType}`
		}
		min={0}
		value={value}
		id={input.id}
		onChange={onChange}
	/>
)
export const Label = ({input, prompt}: {input: T_InputFactory.InputModel; prompt: string}) => {
	console.log(input.inputType)
	const value =
		input.placeholder.length > 0
			? input.placeholder
			: ["text", "email", "password"].includes(input.inputType)
			? prompt
			: ""
	return (
		<label
			htmlFor={input.id}
			role={"label"}>
			{input.label} {value}
		</label>
	)
}
