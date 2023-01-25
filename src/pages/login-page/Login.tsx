import React from "react"
import {useNavigate} from "react-router-dom"
import $login from "./login.module.css"
import $shared from "../../stylesheets/shared.module.css"
import UseMockedUser from "../../mocks/useMockedUser"
import {PATHS} from "../../routes/config/PATHS"

export default () => {
	const navigate = useNavigate()

	const {authentications} = UseMockedUser(1)

	const handleValidateForm = (e: React.MouseEvent<HTMLButtonElement>) => {
		// e.preventDefault()
		// Here complete with form validation logic
	}

	const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		// Here complete with form submit logic
		navigate(PATHS.PROFILE)
	}
	return (
		<main className={$shared.mainWrapperDarkBG}>
			<section className={$login.container}>
				<i className={`fa fa-user-circle ${$login.icon}`}></i>
				<h1>Sign In</h1>
				<form onSubmit={handleSubmitForm}>
					<div className={$login.inputWrapper}>
						<label htmlFor="username">Username</label>
						<input type="text" id="username" />
					</div>
					<div className={$login.inputWrapper}>
						<label htmlFor="password">Password</label>
						<input type="password" id="password" />
					</div>
					<div className={$login.checkBoxWrapper}>
						<input type="checkbox" id="remember-me" />
						<label htmlFor="remember-me">Remember me</label>
					</div>

					<button onClick={handleValidateForm} className={$login.Button}>Sign In
					</button>
				</form>
			</section>
		</main>
	)
}