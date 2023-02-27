import {T_InputFactory} from "../types/T_InputFactory"

export const useVisualSuccessFeedback = (that: HTMLInputElement, input: T_InputFactory.InputModel) => {
	const parent = that.parentElement as HTMLDivElement
	parent.dataset.validation = "success"
}