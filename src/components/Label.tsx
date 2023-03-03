import React from "react"
import {T_InputFactory} from "../types/T_InputFactory"

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
