import {useNavigate} from "react-router-dom"
import React, {useCallback} from "react"
import {T_LoginFormState} from "./useLoginFormReducer"
import logInUser from "../../../api/logInUser"
import {T_Response} from "../../../api/schema/T_Request"
import {AxiosResponse} from "axios"
import {PATH} from "../../../config.json"
import getUserProfile from "../../../api/getUserProfile"
import {useLoginDispatcher} from "../../../hooks/useLoginDispatcher"

type T = Partial<Pick<T_LoginFormState, "rememberMe" | "username" | "password">>

function validateData({rememberMe, username, password}: T) {
	const USERNAME_MIN_LENGTH = 3
	const PASSWORD_MIN_LENGTH = 8

	try {
		if (!username || !password) {
			throw new Error("username and password must be filled")
		}
		if (username.length < USERNAME_MIN_LENGTH) {
			throw new Error(`username must be at least ${USERNAME_MIN_LENGTH} characters`)
		}
		if (password.length < PASSWORD_MIN_LENGTH) {
			throw new Error(`password must be at least ${PASSWORD_MIN_LENGTH} characters`)
		}

		return {isValid: true, data: {rememberMe, username, password}}
	} catch (e) {
		console.error("Error during validation", e)
		return {isValid: false, data: null}
	}
}

async function submitData(formStates: T) {
	try {
		const response: AxiosResponse<T_Response> = await logInUser({
			email: formStates.username,
			password: formStates.password,
		})
		return {isSuccess: true, data: response}
	} catch (e) {
		console.error("Error during submit", e)
		return {isSuccess: false, data: null}
	}
}

export function useHandleLoginForm() {
	const navigate = useNavigate()
	const {logUserIn} = useLoginDispatcher()

	const handleValidateForm = useCallback((formStates: T) => validateData(formStates), [])

	const handleSubmitForm = useCallback((formStates: T) => submitData(formStates), [])

	const goBackHome = useCallback(
		() =>
			navigate(PATH.HOME, {
				replace: true,
				preventScrollReset: false,
				relative: "route",
			}),
		[]
	)
	const validateAndSubmit = useCallback(
		(e: React.MouseEvent<HTMLButtonElement>, {rememberMe, username, password}: T) => {
			e.preventDefault()
			const {isValid, data} = handleValidateForm({rememberMe, username, password})
			if (isValid && data) {
				const response = handleSubmitForm({password, username, rememberMe})
				response.then(res => {
					console.log(res)
					if (res.isSuccess) {
						console.log("success")
						const token = res.data?.data?.body.token
						localStorage.removeItem("token")
						// todo when refreshing the page, the session is true or false and clear the token
						localStorage.removeItem("session")
						localStorage.setItem("token", token)
						localStorage.setItem("session", rememberMe ? "true" : "false")
						getUserProfile().then(res => {
							if (res.status === 200) {
								const user = res.data.body
								logUserIn(user)
								goBackHome()
							}
						})
					}
				})
			}
		},
		[]
	)
	return {validateAndSubmit}
}
