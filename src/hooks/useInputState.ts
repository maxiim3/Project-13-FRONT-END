import React, {useState} from "react"
import {T_InputFactory} from "../types/T_InputFactory"
import {useValidateInput} from "./UseValidateInput"
import {useResetVisualFeedback} from "./UseResetVisualFeedback"
import {useVisualSuccessFeedback} from "./UseVisualSuccessFeedback"
import {useVisualErrorFeedback} from "./useVisualErrorFeedback"

export const useInputState = () => {
	const [prompt, setPrompt] = useState("")

	const updateValue = (
		e: React.ChangeEvent<HTMLInputElement>,
		input: T_InputFactory.InputModel
	) => {
		const that = e.target as HTMLInputElement
		input.setValue(that.value)
		setPrompt(that.value)

		input.setIsValid(useValidateInput(that, input))

		if (input.inputValue.length === 0 && input.response.status === "none")
			return useResetVisualFeedback(that, input)
		if (input.isValid) return useVisualSuccessFeedback(that, input)
		return useVisualErrorFeedback(that, input)
	}

	return {prompt, setPrompt, updateValue}
}
