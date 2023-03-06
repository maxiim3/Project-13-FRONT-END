import React from "react"
import {T_InputFactory} from "../types/T_InputFactory"
import {InputPropType} from "../types/InputPropType"
import PropTypes from "prop-types"

/**
 * # Label
 * @description A label component that can be used to label inputs.
 * @param {T_InputFactory.InputModel} input
 * @param {string} prompt
 * @return {JSX.Element}
 * @constructor
 */
export const Label = ({input, prompt}: {input: T_InputFactory.InputModel; prompt: string}) => {
	return (
		<label
			htmlFor={input.id}
			role={"label"}>
			{input.label}
		</label>
	)
}

Label.proptype = {
	input: InputPropType.isRequired,
	prompt: PropTypes.string.isRequired,
}
