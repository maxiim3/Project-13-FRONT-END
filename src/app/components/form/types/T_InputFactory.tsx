export declare namespace T_InputFactory {
	type typesOfInput = "text" | "password" | "email" | "number" | "checkbox"

	type params = {
		label: string
		inputType: typesOfInput
		minLength?: number
		placeholder?: string
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
		placeholder: string
		setValue: (value: string) => typeof value
		setIsValid: (value: boolean) => typeof value
		setResponse: (value: response) => typeof value
		setPlaceholder: (value: string) => typeof value
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
