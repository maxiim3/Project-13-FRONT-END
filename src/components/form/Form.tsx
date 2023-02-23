import React, {MutableRefObject, useEffect, useState} from "react"
import {useHandleLoginForm} from "../../pages/login-page/hooks/useHandleLoginForm"
import {InputComponent} from "./components/InputComponent"
import {useRandomKey} from "../../hooks/useRandomKey"
import {T_ArrayOfInputs} from "./types/T_ArrayOfInputs"
import {useFormContext} from "./context/useFormContext"
import {FormContext, useForm} from "./context/context"
import $login from "../../pages/login-page/sass/login.module.css"
import {T_LoginFormState} from "../../pages/login-page/hooks/useLoginFormReducer"

export function FormProvider(props: {inputs: T_ArrayOfInputs}) {
	return (
		<FormContext.Provider value={useForm(props.inputs)}>
			<form>
				{props.inputs.map(input => {
					return (
						<InputComponent
							key={useRandomKey()}
							thisInput={input}
						/>
					)
				})}
				<SubmitButton />
			</form>
		</FormContext.Provider>
	)
}

function SubmitButton() {
	enum Request {
		idle = "Sign in",
		pending = "pending",
		success = "success",
		rejected = "rejected",
	}

	const {inputCollection} = useFormContext()
	const {validateAndSubmit} = useHandleLoginForm()

	const [RequestState, setRequestState] = useState<Request>(Request.idle)
	const [isSuccess, setIsSuccess] = useState(false)
	const btnRef = React.useRef() as MutableRefObject<HTMLButtonElement>

	useEffect(() => {
		console.log("RequestState: ", RequestState)
		console.log("BTN: ", btnRef.current.disabled)
		switch (RequestState) {
			case Request.pending:
				btnRef.current.disabled = true
				break
			case Request.rejected:
				btnRef.current.disabled = true
				break
			default:
				btnRef.current.disabled = false
				break
		}
	}, [RequestState])

	const submitForm = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		const testValidation = inputCollection
			.filter(({inputType}) => inputType !== "checkbox")
			.every(input => input.isValid)
		if (!testValidation) return

		const setRememberMe =
			inputCollection.find(({inputType}) => inputType === "checkbox")?.value === "true"
		const setUsername = inputCollection.find(({value}) => value === "text")?.value
		const setPassword = inputCollection.find(({value}) => value === "password")?.value

		const request: Partial<Pick<T_LoginFormState, "rememberMe" | "username" | "password">> = {
			rememberMe: setRememberMe,
			username: setUsername,
			password: setPassword,
		}
		console.log(testValidation)
		setRequestState(Request.pending)

		validateAndSubmit(e, request)
		setTimeout((e: React.MouseEvent<HTMLButtonElement>) => {
			if (!testValidation) {
				setRequestState(Request.rejected)
				setTimeout(() => {
					setRequestState(Request.idle)
				}, 1000)
				return
			}
			setRequestState(Request.success)
			console.log(inputCollection)
			console.log("all valid: ", RequestState)
		}, 1000)

		// validateAndSubmit(e, {password: inputCollection})
	}

	return (
		<button
			ref={btnRef}
			className={$login.Button}
			onClick={submitForm}>
			{RequestState}
		</button>
	)
}
