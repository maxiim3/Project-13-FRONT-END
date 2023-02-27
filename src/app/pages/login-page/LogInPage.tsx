import React, {useMemo} from "react"
import {PATH} from "../../../config.json"
import {Navigate} from "react-router-dom"
import $login from "./login.module.scss"
import {inputFactory} from "../../components/form/factory/InputFactory"
import {Form} from "../../components/form/Form"
import {MainContainer} from "../../containers/Main/MainContainer"
import {useSignIn} from "./hooks/useSignIn"

const email = inputFactory({label: "Username", inputType: "email"})
const password = inputFactory({label: "Password", inputType: "password"})
const checkbox = inputFactory({label: "Remember me", inputType: "checkbox"})
export const LogInPage = () => {
	const inputCollection = useMemo(() => [email, password, checkbox], [])

	const {navigate, handleRequestLogin, isConnected} = useSignIn(inputCollection)
	if (isConnected) {
		navigate(PATH.PROFILE)
		return <Navigate to={PATH.PROFILE} />
	}

	return (
		<MainContainer
			ariaDescription={"Login to your account"}
			ariaLabel={"Sign In Page"}>
			<section className={$login.container}>
				<i className={`fa fa-user-circle ${$login.icon}`}></i>
				<h1>Sign In</h1>
				<Form
					inputCollection={inputCollection}
					handleSubmit={handleRequestLogin}
					description={"Complete the form to sign in"}
					title={'Sign in'}
				/>
			</section>
		</MainContainer>
	)
}
