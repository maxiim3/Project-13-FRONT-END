import React, {useRef} from "react"
import {createInput} from "../functions/createInput"
import {useHandleInputStates} from "./useHandleInputStates"
import {useUpdateUserDispatcher} from "./useUpdateUser"
import userService from "../service/userService"

export function useEditForm(firstName: string, lastName: string) {
	// Ref to target the form and handling submit
	const formRef = useRef() as React.MutableRefObject<HTMLFormElement>
	// Create a new Input
	const firstNameInput = useRef(
		createInput({
						label: "First Name",
						minLength: 4,
						inputType: "text",
					}),
	).current
	// Create a new Input
	const lastNameInput = useRef(
		createInput({
						label: "Last Name",
						minLength: 4,
						inputType: "text",
					}),
	).current

	// Add placeholder to user input
	firstNameInput.setPlaceholder(firstName)
	lastNameInput.setPlaceholder(lastName)

	// State of the names (UI only | feedback to user)
	const {
		prompt: firstNamePrompt,
		setPrompt: setFirstNamePrompt,
		handleUpdateAndFeedback: firstNameValidation,
	} = useHandleInputStates()
	const {
		prompt: lastNamePrompt,
		setPrompt: setLastNamePrompt,
		handleUpdateAndFeedback: lastNameValidation,
	} = useHandleInputStates()
	// Action creator to update user (via dispatch - Store)
	const {updateUser} = useUpdateUserDispatcher()
	// handling the update: Take the prompt of the state and send it to the API
	const handleUpdateProfile = async (e: any) => {
		e.preventDefault()
		type T_Payload = {
			firstName?: string
			lastName?: string
		}
		const payload: T_Payload = {
			firstName: firstNameInput.inputValue,
			lastName: lastNameInput.inputValue,
		}
		try {
			const updateResponse = await userService.updateUser(payload)
			console.log(updateResponse)
			const status = "success"
			const message = "Update successful"

			firstNameInput.setResponse({status, message})
			lastNameInput.setResponse({status, message})

			const user = updateResponse.data.body

			updateUser(user)
			return user
		}
		catch (e: any) {
			const status = "error"
			const message = e.response.data.message
			console.warn(e.response.data.message)
			firstNameInput.setResponse({status, message})
			lastNameInput.setResponse({status, message})
		}
		finally {
			console.log("finally", firstNameInput.response, lastNameInput.response)
		}
	}
	// const submitUpdateRequest = (e: any) => {
	// 	e.preventDefault()
	// 	if (inputCollection.some(input => !input.isValid)) {
	// 		const invalidInputs = inputCollection.filter(input => !input.isValid)
	// 		invalidInputs.forEach(input => {
	// 			const that = document.getElementById(input.id) as HTMLInputElement
	// 			useVisualErrorFeedback(that, input)
	// 		})
	// 	} else {
	// 		formRef.current?.dispatchEvent(new Event("submit", {cancelable: true, bubbles: true}))
	// 	}
	// }
	// Observe if user is connected and navigate back to login page if not

	return {
		formRef,
		firstNameInput,
		firstNamePrompt,
		lastNameInput,
		lastNamePrompt,
		handleUpdateProfile,
		setLastNamePrompt,
		setFirstNamePrompt,
		firstNameValidation,
		lastNameValidation,
	}
}