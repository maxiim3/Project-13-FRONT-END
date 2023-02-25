import React, {useRef} from "react"
import {InputWrapper, T_InputFactory} from "../../pages/auth/LoginPage"
import {getRandomKey} from "../../utils/getRandomKey()"
import $form from "./form.module.css"

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


