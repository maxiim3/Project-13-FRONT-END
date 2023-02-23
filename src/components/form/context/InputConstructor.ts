

type T_TypeOfInput = "text" | "password" | "email" | "number" | "checkbox"
export default class InputConstructor{
	label: string
	minCharacter?: number
	inputType: T_TypeOfInput
	isValid?: boolean

	constructor({
		label,
		minCharacter,
		inputType,
		isValid,
	}: {
		label: string
		minCharacter?: number
		inputType: T_TypeOfInput
		isValid?: boolean
	}) {
		this.label = label
		this.inputType = inputType
		this.isValid = isValid || false
		if (minCharacter) {
			this.minCharacter = minCharacter
		}
	}

	setValid(valid: boolean) {
		this.isValid = valid
	}
}
