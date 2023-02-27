import React, {useRef} from "react"
import {getRandomKey} from "../../../utils/getRandomKey()"
import $form from "../../../components/form/sass/form.module.css"
import {T_InputFactory} from "../../../components/form/types/T_InputFactory"
import {InputContainer} from "../../../components/form/container/InputContainer"

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


