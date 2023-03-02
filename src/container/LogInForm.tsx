import React, {useRef} from "react"
import {getRandomKey} from "../functions/getRandomKey()"
import $form from "../shared/form.module.css"
import {createInput} from "../functions/createInput"
import {InputContainer} from "./InputContainer"
import {useLogIn} from "../hooks/useLogIn"
import {FieldSetWithLegend} from "./FieldSetWithLegend"

function useLogInFormRefs() {
	const email = useRef(createInput({label: "Username", inputType: "email"})).current
	const password = useRef(createInput({label: "Password", inputType: "password"})).current
	const checkbox = useRef(createInput({label: "Remember me", inputType: "checkbox"})).current
	const inputCollection = useRef([email, password, checkbox]).current
	const formDescription: string = useRef("Complete the form to sign in").current
	const formTitle: string = useRef("Sign in").current

	return {inputCollection, formDescription, formTitle}
}

export default () => {
	const {inputCollection, formDescription, formTitle} = useLogInFormRefs()
	const {handleRequestLogin, handleOnSubmit, formRef} = useLogIn(inputCollection)
	const [email, password, checkbox] = inputCollection

	return (
		<form
			className={$form.formContainer}
			aria-label={formTitle}
			aria-describedby={formDescription}
			ref={formRef}
			onSubmit={handleRequestLogin}>
			<FieldSetWithLegend legend={formDescription}>
				<InputContainer
					key={getRandomKey()}
					input={email}
				/>
				<InputContainer
					key={getRandomKey()}
					input={password}
				/>
				<InputContainer
					key={getRandomKey()}
					input={checkbox}
				/>
				<button
					className={$form.submitButton}
					onClick={handleOnSubmit}>
					Sign in
				</button>
			</FieldSetWithLegend>
		</form>
	)
}
