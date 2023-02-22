import {useCallback, useReducer} from "react"

export const initialState_LoginForm = {
	username: "",
	password: "",
	rememberMe: false,
	userIsValid: false,
	passwordIsValid: false,
}
export type T_LoginFormState = typeof initialState_LoginForm
export type T_LoginFormActions =
	| {
			type: "setUserName" | "setPassword"
			payload: string
	  }
	| {
			type: "setRememberMe" | "setUserValidation" | "setPasswordValidation"
			payload: boolean
	  }
export const useLoginFormReducer = () => {
	const [formStates, fromDispatcher] = useReducer(
		(state: T_LoginFormState, action: T_LoginFormActions) => {
			switch (action.type) {
				case "setUserName":
					return {
						...state,
						username: action.payload,
					}
				case "setPassword":
					return {
						...state,
						password: action.payload,
					}
				case "setRememberMe":
					return {
						...state,
						rememberMe: action.payload,
					}
				case "setUserValidation":
					return {
						...state,
						userIsValid: action?.payload,
					}
				case "setPasswordValidation":
					return {
						...state,
						passwordIsValid: action?.payload,
					}
				default:
					return state
			}
		},
		initialState_LoginForm
	)

	const setUserName = useCallback(
		(value: string) => fromDispatcher({type: "setUserName", payload: value}),
		[]
	)

	const setUserPassword = useCallback(
		(value: string) => fromDispatcher({type: "setPassword", payload: value}),
		[]
	)

	const setRememberMe = useCallback(
		(value: boolean) => fromDispatcher({type: "setRememberMe", payload: value}),
		[]
	)
	const setUserValidation = useCallback(
		(value: boolean) => fromDispatcher({type: "setUserValidation", payload: value}),
		[]
	)
	const setPasswordValidation = useCallback(
		(value: boolean) =>
			fromDispatcher({type: "setPasswordValidation", payload: value}),
		[]
	)


	return {formStates, update: {setUserName, setUserPassword, setRememberMe, setUserValidation, setPasswordValidation}}
}
