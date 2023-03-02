import {T_InputFactory} from "../types/T_InputFactory"

export const useResetVisualFeedback = (that: HTMLInputElement, input: T_InputFactory.InputModel) => {
	const parent = that.parentElement as HTMLDivElement
	parent.dataset.validation = "none"
}
