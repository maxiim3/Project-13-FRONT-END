import {getRandomKey} from "../../../../utils/getRandomKey()"
import {T_TypeOfInput} from "../../../types/T_TypeOfInput"

export default class InputModel {
	private readonly _id: string
	private readonly _label: string
	private readonly _minCharacter: number
	private readonly _inputType: T_TypeOfInput
	protected _isValid: boolean
	protected _value: string

	public response: "success" | "error" | null = null

	constructor({
		label,
		inputType,
	}: {
		label: string
		minCharacter?: number
		inputType: T_TypeOfInput
	}) {
		this._id = getRandomKey()
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
