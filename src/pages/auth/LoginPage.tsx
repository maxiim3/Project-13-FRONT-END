import React, {useState} from "react"
import {Navigate, useNavigate} from "react-router-dom"
import $shared from "../../sass/shared.module.css"
import $login from "../../components/form/login.module.css"
import {useSelector} from "react-redux"
import {PATH} from "../../config.json"
import InputConstructor from "../../components/form/context/InputConstructor"
import {FormProvider} from "../../components/form/Form"
import {T_ArrayOfInputs} from "../../types/T_ArrayOfInputs"
import {useLogUserIn} from "../../hooks/UseLogUserIn"
import {AxiosResponse} from "axios"
import logInUser from "../../api/logInUser"
import getUserProfile from "../../api/getUserProfile"

export function useHandleLoginForm() {
	const navigate = useNavigate()
	const {logUserIn} = useLogUserIn()
	const [emailInput, setEmailInput] = useState(
		new InputConstructor({
			label: "username",
			inputType: "email",
		})
	)
	const [passwordInput, setPasswordInput] = useState(
		new InputConstructor({
			label: "Password",
			inputType: "password",
		})
	)
	const [rememberMeInput, setRememberMeInput] = useState(
		new InputConstructor({
			label: "Remember me",
			inputType: "checkbox",
		})
	)

	const handleRequest = async (
		e: React.MouseEvent<HTMLButtonElement>,
		inputs: T_ArrayOfInputs
	) => {
		const email = inputs.find(({id}) => id === emailInput.id)?.value!
		const password = inputs.find(({id}) => id === passwordInput.id)?.value!
		const rememberMe = inputs.find(({id}) => id === rememberMeInput.id)?.value === "true"

		try {
			const response: AxiosResponse = await logInUser({
				email: email,
				password: password,
			})

			if (rememberMe) {
				localStorage.setItem("token", response.data.body.token)
			}
			getUserProfile(response.data.body.token).then(res => {
				if (res.status === 200) {
					const user = res.data.body
					logUserIn(user)
					navigate(PATH.HOME, {
						replace: true,
						preventScrollReset: false,
						relative: "route",
					})
				}
			})
		} catch (e) {
			console.error("Error during submit", e.response.data.message) // todo user feedback if log request fails
		} finally {
			console.log("finally") // todo user feedback if log request fails
			const newEmail = {...emailInput} as InputConstructor
			newEmail.response = "error"

			setEmailInput(newEmail) // todo update the response state of the input from the api

			console.log({newEmail, oldEmail: emailInput})
		}
	}

	return {inputCollection: [emailInput, passwordInput, rememberMeInput], handleRequest}
}

export const LoginPage = () => {
	const navigate = useNavigate()
	const {auth} = useSelector((state: any) => state)
	const {inputCollection, handleRequest} = useHandleLoginForm()

	if (auth.isConnected) {
		navigate(PATH.PROFILE)
		return <Navigate to={PATH.PROFILE} />
	}

	return (
		<main className={$shared.mainWrapperDarkBG}>
			<section className={$login.container}>
				<i className={`fa fa-user-circle ${$login.icon}`}></i>
				<h1>Sign In</h1>

				<FormProvider
					handle={handleRequest}
					inputCollection={inputCollection}
				/>
			</section>
		</main>
	)
}
