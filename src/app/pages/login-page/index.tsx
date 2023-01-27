import React from "react"
import {Form, useNavigate, useSubmit} from "react-router-dom"
import $login from "./login.module.css"
import $shared from "../../global/shared.module.css"
import useMockedUser from "../../../static/mocks/useMockedUser"
import useMockedAuth from "../../../static/mocks/useMockedAuth"
import {ProfileRoute} from "../../routes/routes"

export default () => {
	const navigate = useNavigate()
	const submit = useSubmit()
	const user = useMockedUser(0)
	const auth = useMockedAuth(false)

	const handleValidateForm = (e: React.MouseEvent<HTMLButtonElement>) => {
		// e.preventDefault()
		// Here complete with form validation logic
	}

	const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		/*submit(e)*/
		// Here complete with form submit logic
		navigate(ProfileRoute.path)
	}
	return (
		<main className={$shared.mainWrapperDarkBG}>
			<section className={$login.container}>
				<i className={`fa fa-user-circle ${$login.icon}`}></i>
				<h1>Sign In</h1>
				<Form onSubmit={handleSubmitForm} >{/*reloadDocument replace*/}
					<div className={$login.inputWrapper}>
						<label htmlFor="username">Username</label>
						<input
							type="text"
							id="username"
						/>
					</div>
					<div className={$login.inputWrapper}>
						<label htmlFor="password">Password</label>
						<input
							type="password"
							id="password"
						/>
					</div>
					<div className={$login.checkBoxWrapper}>
						<input
							type="checkbox"
							id="remember-me"
						/>
						<label htmlFor="remember-me">Remember me</label>
					</div>

					<button
						onClick={handleValidateForm}
						className={$login.Button}>
						Sign In
					</button>
				</Form>
			</section>
		</main>
	)
}
