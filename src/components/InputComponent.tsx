import React, {useContext, useEffect, useState} from "react"
import $login from "../pages/login-page/sass/login.module.css"
import {useInputValidation} from "../hooks/UseInputValidation"
import {useTextToCamelCase} from "../hooks/UseTextToCamelCase"
import {FormContext, T_InputType} from "../pages/login-page/LoginPage"

export const InputComponent = ({
	minCharacter,
	label,
	type,
}: {
	minCharacter?: number
	label: string
	type: T_InputType
}) => {
	const [userInput, setUserInput] = useState<string>("")
	const [validInput, setValidInput] = useState(false)
	const {values, dispatchValues} = useContext(FormContext)

	useEffect(() => {
		dispatchValues(values, {payload: {label, isValid: validInput}, type: "setValues"})
	}, [validInput, userInput])
	const id = useTextToCamelCase(label)

	switch (type) {
		case "checkbox":
			return (
				<div className={$login.checkBoxWrapper}>
					<input
						type="checkbox"
						id={id}
						defaultChecked={validInput}
						onChange={e => setValidInput(e.currentTarget.checked)}
					/>
					<label htmlFor={id}>{label}</label>
				</div>
			)
		default:
			return (
				<div className={$login.inputWrapper}>
					<label htmlFor={id}>
						{label} : {userInput}
					</label>
					<input
						aria-roledescription={label}
						type={type}
						id={id}
						onChange={e => {
							setUserInput(e.currentTarget.value)
							const res = useInputValidation(e.currentTarget, minCharacter!)
							setValidInput(res)
						}}
					/>
				</div>
			)
	}
}
// 	if (type === "checkbox") {
//
// 		return (
// 			<div className={$login.checkBoxWrapper}>
// 				<input
// 					type="checkbox"
// 					id={id}
// 					defaultChecked={checkboxInput}
// 					onChange={e => setCheckboxInput(e.currentTarget.checked)}
// 				/>
// 				<label htmlFor={id}>{label}</label>
// 			</div>)
// 	}
//
// 	return (
// 		<div className={$login.inputWrapper}>
// 			<label htmlFor={id}>
// 				{label} : {userInput}
// 			</label>
// 			<input
// 				aria-roledescription={label}
// 				type={type}
// 				id={id}
// 				onChange={e => {
// 					setUserInput(e.currentTarget.value)
// 					const res = useInputValidation(e.currentTarget, minCharacter)
// 					setValidInput(res)
//
// 				}}
// 			/>
// 		</div>
// 	)
// }
