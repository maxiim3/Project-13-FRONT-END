import {T_InputFactory} from "../types/T_InputFactory"

/**
 * # useVisualSuccessFeedback
 * @description Set the visual feedback of the input to error
 * @param {HTMLInputElement} that
 * @param {T_InputFactory.InputModel} input
 */
export const useVisualErrorFeedback = (that: HTMLInputElement, input: T_InputFactory.InputModel) => {
	const parent = that.parentElement as HTMLDivElement
	parent.dataset.validation = "error"
	parent.dataset.message = `${that.ariaRoleDescription} must be at least ${input.minLength} characters.`
	parent.ariaInvalid = "true"
}