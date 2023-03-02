import {T_InputFactory} from "./types/T_InputFactory"
import React from "react"
import {getRandomKey} from "../../functions/getRandomKey()"
import $form from "./sass/form.module.css"
import {InputContainer} from "./container/InputContainer"
import {useForm} from "./hooks/useForm"

export function Form(props: {
	inputCollection: T_InputFactory.InputHydratation
	description: string
	title: string
	buttonLabel?:string
	handleSubmit: (e: any) => void
}) {
	const {formRef, handleOnSubmit} = useForm(props.inputCollection)

	return (
		<form
			className={$form.formContainer}
			aria-label={props.title}
			aria-describedby={props.description}
			ref={formRef}
			onSubmit={props.handleSubmit}>
			<fieldset>
				<legend>{props.description}</legend>
				{props.inputCollection.map(input => (
					<InputContainer
						key={getRandomKey()}
						input={input}
					/>
				))}
				<button
					className={$form.submitButton}
					onClick={handleOnSubmit}>
					{props.buttonLabel || "CLICK"}
				</button>
			</fieldset>
		</form>
	)
}
