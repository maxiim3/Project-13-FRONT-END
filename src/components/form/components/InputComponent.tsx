import React, {useEffect, useState} from "react"
import $login from "../../../pages/login-page/sass/login.module.css"
import {useTextToCamelCase} from "../../../hooks/UseTextToCamelCase"
import {T_FormContext} from "../context/types"
import {useInputValidation} from "../../../hooks/UseInputValidation"

export const InputComponent = ({thisInput}: {thisInput: T_FormContext.inputElement}) => {
	const [promptState, setPromptState] = useState("")
	const [isValid, setIsValid] = useState(thisInput.isValid)

	const id = useTextToCamelCase(thisInput.label)

	useEffect(() => {
		thisInput.isValid = isValid
		thisInput.value = promptState
	}, [promptState, isValid])

	const updateInputValidation = (e: any) => {
		const input = e.currentTarget
		const type = input.type
		const value = input?.value
		const checked = input?.checked

		setPromptState(prev => {
			if (type !== "checkbox") return value

			return checked.toString()
		})
		setIsValid(prev => useInputValidation(input))
	}

	// dispatchForm({type: E_FormActions.CHECK_ALL_VALUES})

	switch (thisInput.inputType) {
		case "checkbox":
			return (
				<div className={$login.checkBoxWrapper}>
					<input
						type="checkbox"
						id={id}
						onChange={updateInputValidation}
						minLength={thisInput.minCharacter}
					/>
					<label htmlFor={id}>
						{thisInput.label} {promptState}
					</label>
				</div>
			)
		default:
			return (
				<div className={$login.inputWrapper}>
					<label htmlFor={id}>
						{thisInput.label} : {promptState}
					</label>
					<input
						minLength={thisInput.minCharacter}
						aria-roledescription={thisInput.label}
						type={thisInput.inputType}
						min={0}
						id={id}
						onChange={updateInputValidation}
					/>
				</div>
			)
	}
}
