import {createInput} from "../functions/createInput"
import {useNavigate} from "react-router-dom"
import {useLoginDispatcher} from "./useLoginDispatcher"
import userService from "../service/userService"
import {PATH} from "../config.json"
import React, {useRef} from "react"
import {useVisualErrorFeedback} from "./useVisualErrorFeedback"

/**
 * # useLogIn
 * @description Hook that handle the form and input states. Handle the submit event and the response from the service.
 * @param {Array<ReturnType<typeof createInput>>} inputCollection
 * @return {{handleRequestLogin: (e: any) => Promise<void>, formRef: React.MutableRefObject<HTMLFormElement>, handleOnSubmit: (e: any) => void}}
 */
export const useLogIn = (inputCollection: Array<ReturnType<typeof createInput>>) => {
	const [email, password, checkbox] = inputCollection
	const {logUserIn} = useLoginDispatcher()
	const navigate = useNavigate()
	const formRef = useRef() as React.MutableRefObject<HTMLFormElement>

	/**
	 * ## handleOnSubmit
	 * @description Handle the submit event. If the form is valid, dispatch the submit event to the form. If not, show the error feedback.
	 * @param e
	 */
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
	/**
	 * ## handleRequestLogin
	 * @description Handle the submit event. If the form is valid, dispatch the submit event to the form. If not, show the error feedback.
	 * @param e
	 * @throws {Error} If the response from the API is not 200
	 * @return {Promise<void>}
	 */
	const handleRequestLogin = async (e: any) => {
		e.preventDefault()
		const payload = {
			email: email.inputValue,
			password: password.inputValue,
		}
		const rememberMe = checkbox.inputValue === "true"

		try {
			const loginResponse = await userService.logInUser(payload)
			// console.log(loginResponse)
			const status = "success"
			const message = "Login successful"
			const token = loginResponse.data.body.token
			email.setResponse({status, message})
			password.setResponse({status, message})

			const userProfileResponse = await userService.getUserProfile(token)
			// console.log(userProfileResponse)
			const user = userProfileResponse.data.body

			logUserIn(user)
			if (rememberMe) {
				localStorage.setItem("token", token)
			}
			navigate(PATH.PROFILE)
		}
		catch (e: any) {
			const status = "error"
			const message = e.response.data.message
			console.warn(e.response.data.message)
			email.setResponse({status, message})
			password.setResponse({status, message})
		}
		finally {
			// console.log("finally", email.response, password.response)
		}
	}

	return {handleRequestLogin, formRef, handleOnSubmit}
}
