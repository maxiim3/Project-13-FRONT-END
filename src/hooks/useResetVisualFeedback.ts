import {T_InputFactory} from "../types/T_InputFactory"

/**
 * # useResetVisualFeedback
 * @description Reset the visual feedback of the input
 * @param {HTMLInputElement} that
 * @param {T_InputFactory.InputModel} input
 */
export const useResetVisualFeedback = (that: HTMLInputElement, input: T_InputFactory.InputModel) => {
	const parent = that.parentElement as HTMLDivElement
	parent.dataset.validation = "none"
}
