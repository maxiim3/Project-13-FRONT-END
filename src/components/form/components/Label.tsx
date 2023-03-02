import React from "react"
import {T_InputFactory} from "../types/T_InputFactory"

export const Label = ({input, value}: {input: T_InputFactory.InputModel; value: string}) => (
	<label
		htmlFor={input.id}
		role={"label"}>
		{input.label} : {(input.inputType === "text" && value) || input.placeholder}
	</label>
)
