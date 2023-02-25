import React, {useRef, useState} from "react"
import $form from "../../components/form/form.module.css"
import {getRandomKey} from "../../utils/getRandomKey()"
import {textToCamelCase} from "../../utils/textToCamelCase"
import {useSelector} from "react-redux"
import {PATH} from "../../config.json"
import $shared from "../../sass/shared.module.scss"
import {Navigate, useNavigate} from "react-router-dom"
import $login from "./login.module.scss"
import logInUser from "../../api/logInUser"
import getUserProfile from "../../api/getUserProfile"
import {useLoginDispatcher} from "../../hooks/useLoginDispatcher"

export declare namespace T_InputFactory {
	type typesOfInput = "text" | "password" | "email" | "number" | "checkbox"

	type params = {
		label: string
		inputType: typesOfInput
		minLength?: number
	}
	type response = {
		status: "success" | "error" | "none"
		message: string
	}

	interface InputModel {
		label: string
		slug: string
		inputType: typesOfInput
		minLength: number
		isValid: boolean
		inputValue: string
		id: string
		response: response
		setValue: (value: string) => string
		setIsValid: (value: boolean) => boolean
		setResponse: (value: response) => response
	}

	type actionReducer =
		| {
				type: "setIsValid"
				payload: boolean
		  }
		| {
				type: "setInputValue"
				payload: string
		  }
		| {
				type: "setResponse"
				payload: response
		  }
	type InputHydratation = Array<InputModel>
}

export function inputFactory(data: T_InputFactory.params) {
	const defaultMinimumCharacter = (inputType: T_InputFactory.typesOfInput) => {
		switch (inputType) {
			case "text":
				return 4
			case "password":
				return 8
			default:
				return 0
		}
	}
	return {
		id: getRandomKey(),
		label: data.label,
		inputType: data.inputType,
		slug: textToCamelCase(data.label),
		isValid: data.inputType === "checkbox",
		minLength: data.minLength || defaultMinimumCharacter(data.inputType),
		inputValue: "",
		response: {
			status: "none",
			message: "",
		},
		setValue: function (value: string) {
			this.inputValue = value
			return value
		},
		setIsValid: function (value: boolean) {
			this.isValid = value
			return value
		},
		setResponse: function (value: T_InputFactory.response) {
			this.response = value
			return value
		},
	} as T_InputFactory.InputModel
}

const Label = (props: {id: string; label: string; value: string}) => (
	<label htmlFor={props.id}>
		{props.label} {props.value}
	</label>
)
const Checkbox = (props: {
	id: string
	minLength: number
	value: string
	onChange: (e: any) => void
}) => (
	<input
		type="checkbox"
		id={props.id}
		onChange={props.onChange}
		minLength={props.minLength}
		value={props.value}
	/>
)

const InputBox = (props: {
	id: string
	minLength: number
	label: string
	inputType: T_InputFactory.typesOfInput
	value: string
	onChange: (e: any) => void
}) => (
	<input
		minLength={props.minLength}
		aria-roledescription={props.label}
		type={props.inputType}
		min={0}
		value={props.value}
		id={props.id}
		onChange={props.onChange}
	/>
)

const useValidation = (that: HTMLInputElement, input: T_InputFactory.InputModel) => {
	return !(that.value.length < input.minLength)
}

const setSuccessFeedback = (that: HTMLInputElement, input: T_InputFactory.InputModel) => {
	const parent = that.parentElement as HTMLDivElement
	parent.dataset.validation = "success"
}
const setErrorFeedback = (that: HTMLInputElement, input: T_InputFactory.InputModel) => {
	const parent = that.parentElement as HTMLDivElement
	parent.dataset.validation = "error"
	parent.dataset.message = `${that.ariaRoleDescription} must be at least ${input.minLength} characters.`
}
const resetFeedback = (that: HTMLInputElement, input: T_InputFactory.InputModel) => {
	const parent = that.parentElement as HTMLDivElement
	parent.dataset.validation = "none"
}

export const InputWrapper = ({input}: {input: T_InputFactory.InputModel}) => {
	const [prompt, setPrompt] = useState("")

	const updateValue = (
		e: React.ChangeEvent<HTMLInputElement>,
		input: T_InputFactory.InputModel
	) => {
		const that = e.target as HTMLInputElement
		input.setValue(that.value)
		setPrompt(that.value)

		input.setIsValid(useValidation(that, input))

		if (input.inputValue.length === 0 && input.response.status === "none")
			return resetFeedback(that, input)
		if (input.isValid) return setSuccessFeedback(that, input)
		return setErrorFeedback(that, input)
	}

	const {current: isCheckbox} = useRef(input.inputType === "checkbox")

	if (isCheckbox)
		return (
			<div className={$form.checkBoxWrapper}>
				<Checkbox
					id={input.id}
					onChange={e => {
						const isChecked = e.target.checked ? "true" : "false"
						setPrompt(isChecked)
						input.setValue(isChecked)
					}}
					minLength={input.minLength}
					value={prompt}
				/>

				<Label
					id={input.id}
					label={input.label}
					value={prompt}
				/>
			</div>
		)

	return (
		<div className={$form.inputWrapper}>
			<Label
				id={input.id}
				label={input.label}
				value={prompt}
			/>

			<InputBox
				id={input.id}
				onChange={e => updateValue(e, input)}
				minLength={input.minLength}
				value={prompt}
				label={input.label}
				inputType={input.inputType}
			/>
		</div>
	)
}

export const LoginPage = () => {
	const navigate = useNavigate()
	const {auth} = useSelector((state: any) => state)
	const {logUserIn} = useLoginDispatcher()
	if (auth.isConnected) {
		navigate(PATH.PROFILE)
		return <Navigate to={PATH.PROFILE} />
	}

	const email = inputFactory({label: "username", inputType: "email"})
	const password = inputFactory({label: "password", inputType: "password"})
	const checkbox = inputFactory({label: "checkbox", inputType: "checkbox"})

	const inputCollection = [email, password, checkbox]

	const handleRequestLogin = async (e: any) => {
		e.preventDefault()
		const payload = {
			email: email.inputValue,
			password: password.inputValue,
		}
		const rememberMe = checkbox.inputValue === "true"

		try {
			const loginResponse = await logInUser(payload)
			console.log(loginResponse)
			const status = "success"
			const message = "Login successful"
			const token = loginResponse.data.body.token
			email.setResponse({status, message})
			password.setResponse({status, message})

			try {
				const userProfileResponse = await getUserProfile(token)
				console.log(userProfileResponse)
				const user = userProfileResponse.data.body

				logUserIn(user)
				if (rememberMe) {
					localStorage.setItem("token", token)
				}
				navigate(PATH.HOME)
			} catch (e) {
				throw new Error(e)
			}
		} catch (e) {
			const status = "error"
			const message = e.response.data.message
			console.warn(e.response.data.message)
			email.setResponse({status, message})
			password.setResponse({status, message})
		} finally {
			console.log("finally", email.response, password.response)
		}
	}

	return (
		<main className={$shared.mainWrapperDarkBG}>
			<section className={$login.container}>
				<i className={`fa fa-user-circle ${$login.icon}`}></i>
				<h1>Sign In</h1>
				<Form
					inputCollection={inputCollection}
					handleSubmit={handleRequestLogin}
				/>
			</section>
		</main>
	)
}

export function Form(props: {
	inputCollection: T_InputFactory.InputHydratation
	handleSubmit: (e: any) => void
}) {
	const formRef = useRef() as React.MutableRefObject<HTMLFormElement>

	const handleOnSubmit = (e: any) => {
		e.preventDefault()
		if (props.inputCollection.some(input => !input.isValid)) {
			const invalidInputs = props.inputCollection.filter(input => !input.isValid)
			invalidInputs.forEach(input => {
				const that = document.getElementById(input.id) as HTMLInputElement
				setErrorFeedback(that, input)
			})
		} else {
			formRef.current?.dispatchEvent(new Event("submit", {cancelable: true, bubbles: true}))
		}
	}
	return (
		<form
			ref={formRef}
			onSubmit={props.handleSubmit}>
			{props.inputCollection.map(input => (
				<InputWrapper
					key={getRandomKey()}
					input={input}
				/>
			))}
			<button
				className={$form.Button}
				onClick={handleOnSubmit}>
				CLICK
			</button>
		</form>
	)
}

