import React, {useContext} from "react"
import {InputComponent} from "./components/InputComponent"
import {getRandomKey} from "../../utils/getRandomKey()"
import {T_ArrayOfInputs} from "../../types/T_ArrayOfInputs"
import {FormContext, useForm} from "./context/context"
import $login from "./login.module.css"

export function FormProvider(props: {
	inputCollection: T_ArrayOfInputs
	handle: (e: React.MouseEvent<HTMLButtonElement>, inputs: typeof props.inputCollection) => void
}) {
	const {handle, inputCollection} = props

	return (
		<FormContext.Provider value={useForm(inputCollection, handle)}>
			<Form />
		</FormContext.Provider>
	)
}

function Form() {
	const {inputCollection, handleButton} = useContext(FormContext)!

	return (
		<form>
			{inputCollection.map(input => {
				return (
					<InputComponent
						key={getRandomKey()}
						thisInput={input}
					/>
				)
			})}
			<button
				className={$login.Button}
				onClick={handleButton}>
				Sign in
			</button>
		</form>
	)
}
