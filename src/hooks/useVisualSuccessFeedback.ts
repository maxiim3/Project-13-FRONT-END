import {T_InputFactory} from "../types/T_InputFactory"

/**
 * # useVisualSuccessFeedback
 * @description Set the visual feedback of the input to success
 * @param {HTMLInputElement} that
 * @param {T_InputFactory.InputModel} input
 */
export const useVisualSuccessFeedback = (
	that: HTMLInputElement,
	input: T_InputFactory.InputModel
) => {
	const parent = that.parentElement as HTMLDivElement
	parent.dataset.validation = "success"
}
