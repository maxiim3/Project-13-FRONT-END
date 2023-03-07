import {T_InputFactory} from "../types/T_InputFactory"
import React, {useRef} from "react"
import $input from "../sass/input.module.css"
import {Label} from "../components/Label"
import {useHandleInputStates} from "../hooks/useHandleInputStates"
import {FieldSetWithLegendContainer} from "./FieldSetWithLegendContainer"
import {CheckboxInput} from "../components/CheckboxInput"
import {DefaultInput} from "../components/DefaultInput"
import {InputPropType} from "../types/InputPropType"

/**
 * # InputContainer
 * @description Input Container encapsulates the logic for handling the type of input that is being rendered
 * @param {T_InputFactory.InputModel} input
 * @return {JSX.Element}
 * @constructor
 */
export const InputContainer = ({input}: {input: T_InputFactory.InputModel}) => {
	const {prompt, setPrompt, handleUpdateAndFeedback} = useHandleInputStates()

	const {current: isCheckbox} = useRef(input.inputType === "checkbox")

	if (isCheckbox)
		return (
			<FieldSetWithLegendContainer
				appliedClass={$input.checkBoxWrapper}
				legend={`Check to ${input.label}`}>
				<CheckboxInput
					input={input}
					value={prompt}
					onChange={e => {
						const isChecked = e.target.checked ? "true" : "false"
						setPrompt(isChecked)
						input.setValue(isChecked)
					}}
				/>

				<Label
					input={input}
					prompt={prompt}
				/>
			</FieldSetWithLegendContainer>
		)

	return (
		<FieldSetWithLegendContainer
			appliedClass={$input.inputWrapper}
			legend={`Check to ${input.label}`}>
			<Label
				input={input}
				prompt={prompt}
			/>

			<DefaultInput
				input={input}
				value={prompt}
				onChange={e => handleUpdateAndFeedback(e, input)}
			/>
		</FieldSetWithLegendContainer>
	)
}

InputContainer.propTypes = {
	input: InputPropType.isRequired,
}
