import React, {useRef} from "react"
import {InputComponent} from "../../pages/auth/LoginPage"
import {getRandomKey} from "../../utils/getRandomKey()"
import {T_ArrayOfInputs} from "../../types/T_ArrayOfInputs"
import $form from "./form.module.css"
import {T_InputFactory} from "../../pages/auth/LoginPage"

// export function FormProvider(props: {
// 	inputCollection: T_ArrayOfInputs
// 	handle: (e: React.MouseEvent<HTMLButtonElement>, inputs: typeof props.inputCollection) => void
// }) {
// 	const {handle, inputCollection} = props
//
// 	return (
// 		<FormContext.Provider value={formContextReducer(inputCollection, handle)}>
// 			<Form />
// 		</FormContext.Provider>
// 	)
// }
//
// function Form() {
// 	const {inputCollection, handleButton} = useContext(FormContext)!
//
// 	return (
// 		<form>
// 			{inputCollection.map(input => {
// 				return (
// 					<InputComponent
// 						key={getRandomKey()}
// 						thisInput={input}
// 					/>
// 				)
// 			})}
// 			<button
// 				className={$form.Button}
// 				onClick={handleButton}>
// 				Sign in
// 			</button>
// 		</form>
// 	)
// }

export function Form(props: {inputCollection: T_InputFactory.InputHydratation}) {
	const formRef = useRef() as React.MutableRefObject<HTMLFormElement>
	return (
		<form
			ref={formRef}
			onSubmit={(e: any) => {
				console.log("submit")
				console.log(e.target.children[0].innerText.trim().split(":")[1].trim())
				e.preventDefault()
			}}>
			{props.inputCollection.map(input => (
				<InputComponent
					key={getRandomKey()}
					input={input}
				/>
			))}

			<button
				className={$form.Button}
				onClick={(e: any) => {
					e.preventDefault()
					console.log("click")
					formRef.current?.dispatchEvent(
						new Event("submit", {cancelable: true, bubbles: true})
					)
				}}>
				CLICK
			</button>
		</form>
	)
}
