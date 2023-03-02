import {T_InputFactory} from "../types/T_InputFactory"
import React, {useRef} from "react"
import $input from "../shared/input.module.css"
import {CheckboxInput, DefaultInput, Label} from "../components/FormItems"
import {useInputState} from "../hooks/useInputState"
import {FieldSetWithLegend} from "./FieldSetWithLegend"

export const InputContainer = ({input}: {input: T_InputFactory.InputModel}) => {
	const {prompt, setPrompt, updateValue} = useInputState()

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
				onChange={e => updateValue(e, input)}
			/>
		</FieldSetWithLegend>
	)
}
