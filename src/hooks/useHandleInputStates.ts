import React, {useCallback, useState} from "react"
import {T_InputFactory} from "../types/T_InputFactory"
import {useValidateInput} from "./useValidateInput"
import {useResetVisualFeedback} from "./useResetVisualFeedback"
import {useVisualSuccessFeedback} from "./useVisualSuccessFeedback"
import {useVisualErrorFeedback} from "./useVisualErrorFeedback"

export const useHandleInputStates = () => {
	const [prompt, setPrompt] = useState("")

	const handleUpdateAndFeedback = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>, input: T_InputFactory.InputModel) => {
			const that = e.currentTarget as HTMLInputElement
			console.log(that.value)

			input.setValue(that.value)
			setPrompt(that.value)
			input.setIsValid(useValidateInput(that, input))

			console.log(input.isValid)
			if (input.inputValue.length === 0 && input.response.status === "none")
				return useResetVisualFeedback(that, input)
			if (input.isValid) return useVisualSuccessFeedback(that, input)
			return useVisualErrorFeedback(that, input)
		},
		[]
	)
	return {prompt, setPrompt, handleUpdateAndFeedback}
}
