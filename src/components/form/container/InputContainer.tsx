import {T_InputFactory} from "../types/T_InputFactory"
import React, {useRef} from "react"
import $form from "../sass/form.module.css"
import {Label} from "../components/Label"
import {InputCheckbox} from "../components/InputCheckbox"
import {InputDefault} from "../components/InputDefault"
import {useInputState} from "../hooks/useInputState"

export const InputContainer = ({input}: {input: T_InputFactory.InputModel}) => {
	const {prompt, setPrompt, updateValue} = useInputState()

	const {current: isCheckbox} = useRef(input.inputType === "checkbox")

	if (isCheckbox)
		return (
			<fieldset className={$form.checkBoxWrapper}>
				<legend>Check to {input.label}</legend>
				<InputCheckbox
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
					value={prompt}
				/>
			</fieldset>
		)

	return (
		<fieldset className={$form.inputWrapper}>
			<legend>Enter your {input.label}</legend>
			<Label
				input={input}
				value={prompt}
			/>

			<InputDefault
				input={input}
				value={prompt}
				onChange={e => updateValue(e, input)}
			/>
		</fieldset>
	)
}
