import {createContext, useReducer} from "react"
import {T_DispatchFormActions, T_FormStateObject} from "./types"

export const formReducer = (state: T_FormStateObject, action: T_DispatchFormActions) => {
	switch (action.type) {
		case "setValues":
			const newInputState = state.inputValues.map(input => {
				if (input.label === action.payload.label) {
					input.setValid(action.payload.isValid)
				}
				return input
			})
			return {...state, inputValues: newInputState}
		case "checkAllValues":
			const verification = state.inputValues.every(input => input.isValid)
			return {...state, allValid: verification}
		default:
			return state
	}
}
export const useForm = (initialState: T_FormStateObject) => {
	const [{inputValues, allValid}, dispatchForm] = useReducer(formReducer, initialState)
	return {inputValues, allValid, dispatchForm}
}
export const FormContext = createContext<ReturnType<typeof useForm> | undefined>(
	undefined as ReturnType<typeof useForm> | undefined,
)