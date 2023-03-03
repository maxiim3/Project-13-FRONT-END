import {T_InputFactory} from "../types/T_InputFactory"
import React, {useRef} from "react"
import $input from "../shared/input.module.css"
import {Label} from "../components/Label"
import {useHandleInputStates} from "../hooks/useHandleInputStates"
import {FieldSetWithLegend} from "./FieldSetWithLegend"
import {CheckboxInput} from "../components/CheckboxInput"
import {DefaultInput} from "../components/DefaultInput"

export const InputContainer = ({input}: {input: T_InputFactory.InputModel}) => {
	const {prompt, setPrompt, handleUpdateAndFeedback} = useHandleInputStates()

	const {current: isCheckbox} = useRef(input.inputType === "checkbox")

	if (isCheckbox)
		return (
			<FieldSetWithLegend
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
			</FieldSetWithLegend>
		)

	return (
		<FieldSetWithLegend
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
		</FieldSetWithLegend>
	)
}
