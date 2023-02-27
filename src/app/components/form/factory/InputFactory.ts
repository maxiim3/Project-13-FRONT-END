import {T_InputFactory} from "../types/T_InputFactory"
import {getRandomKey} from "../../../../utils/getRandomKey()"
import {textToCamelCase} from "../../../../utils/textToCamelCase"

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
		label: data.label,
		inputType: data.inputType,
		slug: textToCamelCase(data.label),
		isValid: data.inputType === "checkbox",
		minLength: data.minLength || defaultMinimumCharacter(data.inputType),
		inputValue: "",
		response: {
			status: "none",
			message: "",
		},
		setValue: function(value: string) {
			this.inputValue = value
			return value
		},
		setIsValid: function(value: boolean) {
			this.isValid = value
			return value
		},
		setResponse: function(value: T_InputFactory.response) {
			this.response = value
			return value
		},
	} as T_InputFactory.InputModel
}