import {useRandomKey} from "../../../hooks/useRandomKey"

export type T_TypeOfInput = "text" | "password" | "email" | "number" | "checkbox"
export default class InputConstructor {
	private readonly _id: string
	private readonly _label: string
	private readonly _minCharacter: number
	private readonly _inputType: T_TypeOfInput
	protected _isValid: boolean
	protected _value: string

	constructor({
		label,
		inputType,
	}: {
		label: string
		minCharacter?: number
		inputType: T_TypeOfInput
	}) {
		this._id = useRandomKey()
		this._label = label
		this._inputType = inputType
		this._isValid = inputType === "checkbox"
		this._minCharacter = this.setMinimumCharacter()
		this._value = inputType === "checkbox" ? "false" : ""
	}

	setMinimumCharacter() {
		switch (this._inputType) {
			case "text":
				return 4
			case "password":
				return 8
			default:
				return 0
		}
	}

	set isValid(value: boolean) {
		this._isValid = value
	}

	set value(value: string) {
		this._value = value
	}

	get id(): string {
		return this._id
	}

	get label(): string {
		return this._label
	}

	get minCharacter(): number {
		return this._minCharacter
	}

	get inputType(): T_TypeOfInput {
		return this._inputType
	}

	get isValid(): boolean {
		return this._isValid
	}

	get value(): string {
		return this._value
	}
}
