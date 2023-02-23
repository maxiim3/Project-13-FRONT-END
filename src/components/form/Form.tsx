import React from "react"
import {useHandleLoginForm} from "../../pages/login-page/hooks/useHandleLoginForm"
import {InputComponent} from "./components/InputComponent"
import {useRandomKey} from "../../hooks/useRandomKey"
import {T_ArrayOfInputs} from "./types/T_ArrayOfInputs"
import {useFormContext} from "./context/useFormContext"
import {FormContext, useForm} from "./context/context"
import {ContextTypes} from "./context/types"

const initialState: ContextTypes.T_FormStateObject = {
	inputValues: [],
	allValid: false,
}

export function FormProvider(props: {inputs: T_ArrayOfInputs}) {
	const {validateAndSubmit} = useHandleLoginForm()

	return (
		<FormContext.Provider value={useForm({inputValues: props.inputs, allValid: false})}>
			<form>
				{props.inputs.map(input => {
					return (
						<InputComponent
							key={useRandomKey()}
							thisInput={input}
						/>
					)
				})}
				{/*<SubmitButton />*/}
			</form>
		</FormContext.Provider>
	)
}

function SubmitButton() {
	const {allValid} = useFormContext()

	return <button>is Valid : {allValid ? "Yes" : "no"}</button>
}
