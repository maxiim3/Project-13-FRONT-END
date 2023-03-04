import React from "react"
import {getRandomKey} from "../functions/getRandomKey()"
import $form from "../shared/form.module.css"
import {InputContainer} from "../container/InputContainer"
import {useLogIn} from "../hooks/useLogIn"
import {FieldSetWithLegend} from "../container/FieldSetWithLegend"
import {useLogInFormRefs} from "../hooks/useLogInFormRefs"

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
