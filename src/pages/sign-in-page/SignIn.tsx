import React from "react"
import {useNavigate} from "react-router-dom"
import $signIn from "./signin.module.css"
import $shared from "../../layouts/layout.module.css"
export function SignIn() {
	const navigate = useNavigate()

	const handleValidateForm = (e: React.MouseEvent<HTMLButtonElement>) => {
		// e.preventDefault()
		// Here complete with form validation logic
	}

	const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		// Here complete with form submit logic
		navigate("/user-page")
	}
	return (
		<main className={$shared.mainWrapperDarkBG}>
			<section className={$signIn.container}>
				<i className={`fa fa-user-circle ${$signIn.icon}`}></i>
				<h1>Sign In</h1>
				<form onSubmit={handleSubmitForm}>
					<div className={$signIn.inputWrapper}>
						<label htmlFor="username">Username</label>
						<input type="text" id="username" />
					</div>
					<div className={$signIn.inputWrapper}>
						<label htmlFor="password">Password</label>
						<input type="password" id="password" />
					</div>
					<div className={$signIn.checkBoxWrapper}>
						<input type="checkbox" id="remember-me" />
						<label htmlFor="remember-me">Remember me</label>
					</div>

					<button onClick={handleValidateForm} className={$signIn.Button}>Sign In
					</button>
				</form>
			</section>
		</main>
	)
}