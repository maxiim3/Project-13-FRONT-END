import React, {useEffect, useState} from "react"
import $form from "../../../components/form/sass/form.module.css"
import {textToCamelCase} from "../../../utils/textToCamelCase"
import {T_FormContext} from "../../../types/T_FormContext"



export const InputComponent = ({thisInput}: {thisInput: T_FormContext.inputElement}) => {
	const [promptState, setPromptState] = useState("")
	const [isValid, setIsValid] = useState(thisInput.isValid)

	const id = textToCamelCase(thisInput.label)

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
		setIsValid(prev => {
			const minimalLength = input.minLength
			const parent = input.parentElement as HTMLDivElement
			if (input.value.length !== 0 || thisInput.response) {
				if (input.value.length < minimalLength || thisInput.response === "error") {
					parent.dataset.validation = "error"
					parent.dataset.message = `${input.ariaRoleDescription} length must be greater than ${minimalLength}`
					return false
				} else {
					parent.dataset.validation = "success"
					parent.dataset.message = `${input.ariaRoleDescription} length is greater than ${minimalLength}`
					return true
				}
			}
			if (input.value.length === 0 || !thisInput.response) {
				parent.dataset.validation = "none"
				return false
			}
			return false
		})
	}

	// dispatchForm({type: E_FormActions.CHECK_ALL_VALUES})

	switch (thisInput.inputType) {
		case "checkbox":
			return (
				<div className={$form.checkBoxWrapper}>
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
				<div className={$form.inputWrapper}>
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
