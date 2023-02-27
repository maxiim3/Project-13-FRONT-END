import {inputFactory} from "../factory/InputFactory"
import React, {useRef} from "react"
import {useVisualErrorFeedback} from "./useVisualErrorFeedback"

export const useForm = (inputCollection: Array<ReturnType<typeof inputFactory>>) => {
	const formRef = useRef() as React.MutableRefObject<HTMLFormElement>

	const handleOnSubmit = (e: any) => {
		e.preventDefault()
		if (inputCollection.some(input => !input.isValid)) {
			const invalidInputs = inputCollection.filter(input => !input.isValid)
			invalidInputs.forEach(input => {
				const that = document.getElementById(input.id) as HTMLInputElement
				useVisualErrorFeedback(that, input)
			})
		}
		else {
			formRef.current?.dispatchEvent(new Event("submit", {cancelable: true, bubbles: true}))
		}
	}

	return {formRef, handleOnSubmit}
}