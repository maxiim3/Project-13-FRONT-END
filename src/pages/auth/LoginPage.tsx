import React, {useEffect, useReducer, useState} from "react"
import {Navigate, useNavigate} from "react-router-dom"
import {Form} from "../../components/form/Form"
import $shared from "../../sass/shared.module.css"
import $login from "../../components/form/form.module.css"
import $form from "../../components/form/form.module.css"
import {useSelector} from "react-redux"
import {PATH} from "../../config.json"
import {getRandomKey} from "../../utils/getRandomKey()"
import {textToCamelCase} from "../../utils/textToCamelCase"

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
	const input: T_InputFactory.InputModel = {
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
	}

	return input
}

const useInputFactory = (input: T_InputFactory.InputModel) => {
	const inputReducer = (
		prev: T_InputFactory.InputModel,
		action: T_InputFactory.actionReducer
	) => {
		switch (action.type) {
			case "setIsValid":
				return {
					...prev,
					isValid: action.payload,
				}
			case "setInputValue":
				return {
					...prev,
					inputValue: action.payload,
				}
			case "setResponse":
				return {
					...prev,
					response: action.payload,
				}
			default:
				return prev
		}
	}

	const [inputState, dispatchInput] = useReducer(inputReducer, input)
	console.log("rerender ", inputState.label)

	return {
		inputState,
		dispatchInput,
	}
}

export const InputComponent = ({input}: {input: T_InputFactory.InputModel}) => {
	const {inputState, dispatchInput} = useInputFactory(input)
	const [prompt, setPrompt] = useState("HelloCoucou")
	useEffect(() => {
		dispatchInput({type: "setInputValue", payload: prompt})
	}, [prompt])

	const updateValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		setPrompt(value)
	}

	const Label = () => (
		<label htmlFor={inputState.id}>
			{inputState.label} {inputState.inputValue}
		</label>
	)
	const Checkbox = () => (
		<input
			type="checkbox"
			id={inputState.id}
			onChange={updateValue}
			minLength={inputState.minLength}
			value={prompt}
		/>
	)

	const InputBox = () => (
		<input
			minLength={inputState.minLength}
			aria-roledescription={inputState.label}
			type={inputState.inputType}
			min={0}
			value={prompt}
			id={inputState.id}
			onChange={updateValue}
		/>
	)

	if (inputState.inputType === "checkbox")
		return (
			<div className={$form.checkBoxWrapper}>
				<Checkbox />
				<Label />
			</div>
		)

	return (
		<div className={$form.inputWrapper}>
			<Label />
			<InputBox />
		</div>
	)
}

export const LoginPage = () => {
	const navigate = useNavigate()
	const {auth} = useSelector((state: any) => state)
	// const {inputCollection, handleRequest} = useProvideAndHandleInputs()

	if (auth.isConnected) {
		navigate(PATH.PROFILE)
		return <Navigate to={PATH.PROFILE} />
	}

	const inputCollection = [
		inputFactory({label: "username", inputType: "text"}),
		inputFactory({label: "password", inputType: "password"}),
		inputFactory({label: "checkbox", inputType: "checkbox"}),
	]

	return (
		<main className={$shared.mainWrapperDarkBG}>
			<section className={$login.container}>
				<i className={`fa fa-user-circle ${$login.icon}`}></i>
				<h1>Sign In</h1>
				<Form inputCollection={inputCollection} />
			</section>
		</main>
	)
}
// export function useProvideAndHandleInputs() {
// 	const navigate = useNavigate()
// 	const {logUserIn} = useLoginDispatcher()
//
// 	const emailInput = new InputModel({
// 										  label: "username",
// 										  inputType: "email",
// 									  })
// 	const passwordInput = new InputModel({
// 											 label: "Password",
// 											 inputType: "password",
// 										 })
// 	const rememberMeInput = new InputModel({
// 											   label: "Remember me",
// 											   inputType: "checkbox",
// 										   })
//
// 	const inputCollection = [emailInput, passwordInput, rememberMeInput]
// 	const handleRequest = async (
// 		e: React.MouseEvent<HTMLButtonElement>,
// 		inputs: T_ArrayOfInputs
// 	) => {
// 		const email = inputs.find(({id}) => id === emailInput.id)?.value!
// 		const password = inputs.find(({id}) => id === passwordInput.id)?.value!
// 		const rememberMe = inputs.find(({id}) => id === rememberMeInput.id)?.value === "true"
//
// 		try {
// 			const response: AxiosResponse = await logInUser({
// 																email: email,
// 																password: password,
// 															})
//
// 			if (rememberMe) {
// 				localStorage.setItem("token", response.data.body.token)
// 			}
// 			getUserProfile(response.data.body.token).then(res => {
// 				if (res.status === 200) {
// 					const user = res.data.body
// 					logUserIn(user)
// 					navigate(PATH.HOME, {
// 						replace: true,
// 						preventScrollReset: false,
// 						relative: "route",
// 					})
// 				}
// 			})
// 		} catch (e) {
// 			console.error("Error during submit", e.response.data.message) // todo user feedback if log request fails
// 		} finally {
// 			console.log("finally") // todo user feedback if log request fails
// 			const newEmail = {...emailInput} as InputModel
// 			newEmail.response = "error"
//
// 			console.log({newEmail, oldEmail: emailInput})
// 		}
// 	}
//
// 	return {inputCollection, handleRequest}
// }
