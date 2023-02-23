import React, {useState} from "react"
import $login from "../../../pages/login-page/sass/login.module.css"
import {useTextToCamelCase} from "../../../hooks/UseTextToCamelCase"
import {useInputValidation} from "../../../hooks/UseInputValidation"
import {ContextTypes, E_FormActions} from "../context/types"
import {useFormContext} from "../context/useFormContext"

export const InputComponent = ({thisInput}: {thisInput: ContextTypes.T_Input_Model}) => {
	const {dispatchForm} = useFormContext()
	const [userInput, setUserInput] = useState("")

	const id = useTextToCamelCase(thisInput.label)

	const updateInputValidation = (e: any) => {
		const isCheckbox = e.currentTarget.type === "checkbox"

		if (isCheckbox) {
			setUserInput(e.currentTarget.checked)
			dispatchForm({
				type: E_FormActions.SET_VALUES,
				payload: {label: thisInput.label, isValid: e.currentTarget.checked},
			})
			dispatchForm({type: E_FormActions.CHECK_ALL_VALUES})
		} else {
			setUserInput(e.currentTarget.value)
			const res = useInputValidation(e.currentTarget, thisInput.minCharacter!)
			dispatchForm({
				type: E_FormActions.SET_VALUES,
				payload: {label: thisInput.label, isValid: res},
			})
			dispatchForm({type: E_FormActions.CHECK_ALL_VALUES})
		}
	}

	switch (thisInput.inputType) {
		case "checkbox":
			return (
				<div className={$login.checkBoxWrapper}>
					<input
						type="checkbox"
						id={id}
						defaultChecked={thisInput.isValid}
						onChange={updateInputValidation}
					/>
					<label htmlFor={id}>{thisInput.label}</label>
				</div>
			)
		default:
			return (
				<div className={$login.inputWrapper}>
					<label htmlFor={id}>
						{thisInput.label} : {userInput}
					</label>
					<input
						aria-roledescription={thisInput.label}
						type={thisInput.inputType}
						id={id}
						onChange={updateInputValidation}
					/>
				</div>
			)
	}
}
