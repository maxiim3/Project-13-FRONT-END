import React, {ReactNode, useContext, useEffect, useState} from "react"
import {Navigate, useNavigate} from "react-router-dom"
import $shared from "../../sass/shared.module.css"
import $login from "./sass/login.module.css"
import {useSelector} from "react-redux"
import {PATH} from "../../config.json"
import {useHandleLoginForm} from "./hooks/useHandleLoginForm"
import {useLoginFormReducer} from "./hooks/useLoginFormReducer"
import {InputComponent} from "../../components/InputComponent"
import {useRandomKey} from "../../hooks/useRandomKey"

class InputModel {
	label: string
	minCharacter?: number
	inputType: T_InputType
	isValid?: boolean

	constructor({
		label,
		minCharacter,
		inputType,
		isValid,
	}: {
		label: string
		minCharacter?: number
		inputType: T_InputType
		isValid?: boolean
	}) {
		this.label = label
		this.inputType = inputType
		this.isValid = isValid || false
		if (minCharacter) {
			this.minCharacter = minCharacter
		}
	}

	setValid(valid: boolean) {
		this.isValid = valid
	}
}

export type T_InputType = "text" | "password" | "email" | "number" | "checkbox"
export type T_ReducerAction =
	| {
			type: "setValues"
			payload?: {
				label: string
				isValid: boolean
			}
	  }
	| {
			type: "checkAllValues"
	  }

export type T_FormState = {
	values: Array<InputModel>
	dispatchValues: (
		state: Array<InputModel>,
		reducer: T_ReducerAction
	) => Array<InputModel> | boolean
}
export const FormContext = React.createContext<T_FormState>({
	values: [] as Array<InputModel>,
	dispatchValues: (state: Array<InputModel>, reducer: T_ReducerAction) => {},
})

function Form(props: {inputs: Array<InputModel>}) {
	const {validateAndSubmit} = useHandleLoginForm()

	return (
		<form>
			<FormContext.Provider
				value={{
					values: [...props.inputs],
					dispatchValues: (state, reducer) => {
						switch (reducer.type) {
							case "setValues":
								const newState = state.map(input => {
									if (input.label === reducer.payload.label) {
										input.setValid(reducer.payload.isValid)
									}
									return input
								})
								return newState
							case "checkAllValues":
								return state.every(input => input.isValid)
							default:
								return state
						}
					},
				}}>
				<ContextBuffer>
					{props.inputs.map(input => {
						return (
							<InputComponent
								key={useRandomKey()}
								type={input.inputType}
								label={input.label}
								minCharacter={input?.minCharacter}
							/>
						)
					})}
					{/*<button>{props.inputs.every(input => input.isValid)?"All valid" : "not"}</button>*/}
					<SubmitButton />
				</ContextBuffer>
			</FormContext.Provider>
		</form>
	)
}

function ContextBuffer(props: {children: ReactNode}) {
	const {values, dispatchValues} = useContext(FormContext)
	const [allValid, setAllValid] = useState(() => dispatchValues(values, {type: "checkAllValues"}))
	useEffect(() => {
		console.log(values, allValid)
	}, [values, allValid])
	console.log(values, allValid)
	return (
		<>
			{props.children}
			<button
				aria-disabled={!allValid}
				disabled={!allValid}
				className={$login.Button}>
				Sign In
			</button>
		</>
	)
}

function SubmitButton() {
	const {values, dispatchValues} = useContext(FormContext)
	const [allValid, setAllValid] = useState(() => dispatchValues(values, {type: "checkAllValues"}))
	// todo HERE VALIDATION BEFORE SUBMITTING
	// const all = dispatchValues(values, {type: "checkAllValues"})
	useEffect(() => {
		console.log(values, allValid)
	}, [values, allValid])
	return (
		<button
			onClick={e => {
				e.preventDefault()
				setAllValid(dispatchValues(values, {type: "checkAllValues"}))
			}}>
			{values.every(input => input.isValid) ? "All valid" : "not"}
		</button>
	)
}

export const LoginPage = () => {
	const navigate = useNavigate()
	const {auth} = useSelector((state: any) => state)

	const {formStates, update} = useLoginFormReducer()
	const {validateAndSubmit} = useHandleLoginForm()

	if (auth.isConnected) {
		navigate(PATH.PROFILE)
		return <Navigate to={PATH.PROFILE} />
	}

	return (
		<main className={$shared.mainWrapperDarkBG}>
			<section className={$login.container}>
				<i className={`fa fa-user-circle ${$login.icon}`}></i>
				<h1>Sign In</h1>
				<form>
					{/*<div className={$login.inputWrapper}>*/}
					{/*	<label htmlFor="username">Username : {formStates.username}</label>*/}
					{/*	<input*/}
					{/*		aria-roledescription={"username"}*/}
					{/*		type="text"*/}
					{/*		id="username"*/}
					{/*		onChange={e => {*/}
					{/*			update.setUserName(e.currentTarget.value)*/}
					{/*			const res = useInputValidation(e.currentTarget, 4)*/}
					{/*			update.setUserValidation(res)*/}
					{/*		}}*/}
					{/*	/>*/}
					{/*</div>*/}
					{/*<div className={$login.inputWrapper}>*/}
					{/*	<label htmlFor="password">Password : {formStates.password}</label>*/}
					{/*	<input*/}
					{/*		aria-roledescription={"password"}*/}
					{/*		type="password"*/}
					{/*		id="password"*/}
					{/*		onChange={e => {*/}
					{/*			update.setUserPassword(e.currentTarget.value)*/}
					{/*			const res = useInputValidation(e.currentTarget, 8)*/}
					{/*			update.setPasswordValidation(res)*/}
					{/*		}}*/}
					{/*	/>*/}
					{/*</div>*/}
					<div className={$login.checkBoxWrapper}>
						<input
							type="checkbox"
							id="remember-me"
							defaultChecked={formStates.rememberMe}
							onChange={e => update.setRememberMe(e.currentTarget.checked)}
						/>
						<label htmlFor="remember-me">Remember me</label>
					</div>

					<button
						aria-disabled={!formStates.userIsValid || !formStates.passwordIsValid}
						disabled={!formStates.userIsValid || !formStates.passwordIsValid}
						onClick={e => validateAndSubmit(e, formStates)}
						className={$login.Button}>
						Sign In
					</button>
				</form>
				<Form
					inputs={[
						new InputModel({
							label: "Username",
							minCharacter: 4,
							inputType: "text",
						}),
						new InputModel({
							label: "Password",
							minCharacter: 8,
							inputType: "password",
						}),
						new InputModel({
							label: "Remind Me",
							inputType: "checkbox",
						}),
					]}
				/>
			</section>
		</main>
	)
}
