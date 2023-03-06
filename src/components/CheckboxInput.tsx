import {T_InputFactory} from "../types/T_InputFactory"
import React from "react"
import PropTypes from "prop-types"
import {InputPropType} from "../types/InputPropType"

/**
 * # CheckboxInput
 * @description This component is used to render a checkbox input
 * @param {T_InputFactory.InputModel} input
 * @param {string} value
 * @param {(e: any) => void} onChange
 * @return {JSX.Element}
 */
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

CheckboxInput.propTypes = {
	input: InputPropType,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
}
