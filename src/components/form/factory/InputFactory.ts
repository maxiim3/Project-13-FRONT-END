import {T_InputFactory} from "../types/T_InputFactory"
import {getRandomKey} from "../../../functions/getRandomKey()"
import {textToCamelCase} from "../../../functions/textToCamelCase"

export function inputFactory(data: T_InputFactory.params) {
	const defaultMinimumCharacter = (inputType: T_InputFactory.typesOfInput) => {
		switch (inputType) {
			case "text":
				return 4
			case "password":
				return 8
			default:
				return 0
		}
	}
	return {
		id: getRandomKey(),
		inputType: data.inputType,
		inputValue: "",
		isValid: data.inputType === "checkbox",
		label: data.label,
		minLength: data.minLength || defaultMinimumCharacter(data.inputType),
		placeholder: data?.placeholder || "",
		response: {
			status: "none",
			message: "",
		},
		setIsValid: function(value: boolean) {
			this.isValid = value
			return value
		},
		setPlaceholder: function(value: string) {
			this.placeholder = value
			return value
		},
		setResponse: function(value: T_InputFactory.response) {
			this.response = value
			return value
		},
		setValue: function(value: string) {
			this.inputValue = value
			return value
		},
		slug: textToCamelCase(data.label),
	} as T_InputFactory.InputModel
}
