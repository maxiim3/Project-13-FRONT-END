import {T_InputFactory} from "../types/T_InputFactory"

export const useValidateInput = (that: HTMLInputElement, input: T_InputFactory.InputModel) => {
	return !(that.value.length < input.minLength)
}
