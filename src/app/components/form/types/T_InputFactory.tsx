export declare namespace T_InputFactory {
	type typesOfInput = "text" | "password" | "email" | "number" | "checkbox"

	type params = {
		label: string
		inputType: typesOfInput
		minLength?: number
	}
	type response = {
		status: "success" | "error" | "none"
		message: string
	}

	interface InputModel {
		label: string
		slug: string
		inputType: typesOfInput
		minLength: number
		isValid: boolean
		inputValue: string
		id: string
		response: response
		setValue: (value: string) => string
		setIsValid: (value: boolean) => boolean
		setResponse: (value: response) => response
	}

	type actionReducer =
		| {
		type: "setIsValid"
		payload: boolean
	}
		| {
		type: "setInputValue"
		payload: string
	}
		| {
		type: "setResponse"
		payload: response
	}
	type InputHydratation = Array<InputModel>
}