import React from "react"
import {Navigate, useNavigate} from "react-router-dom"
import $shared from "../../sass/shared.module.css"
import $login from "./sass/login.module.css"
import {useSelector} from "react-redux"
import {PATH} from "../../config.json"
import {useHandleLoginForm} from "./hooks/useHandleLoginForm"
import {useLoginFormReducer} from "./hooks/useLoginFormReducer"
import {FormProvider} from "../../components/form/Form"
import InputConstructor from "../../components/form/context/InputConstructor"

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
				{/*<form>
				 <div className={$login.inputWrapper}>
				 <label htmlFor="username">Username : {formStates.username}</label>
				 <input
				 aria-roledescription={"username"}
				 type="text"
				 id="username"
				 onChange={e => {
				 update.setUserName(e.currentTarget.value)
				 const res = useInputValidation(e.currentTarget, 4)
				 update.setUserValidation(res)
				 }}
				 />
				 </div>
				 <div className={$login.inputWrapper}>
				 <label htmlFor="password">Password : {formStates.password}</label>
				 <input
				 aria-roledescription={"password"}
				 type="password"
				 id="password"
				 onChange={e => {
				 update.setUserPassword(e.currentTarget.value)
				 const res = useInputValidation(e.currentTarget, 8)
				 update.setPasswordValidation(res)
				 }}
				 />
				 </div>
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
				 </form>*/}
				<FormProvider
					inputs={[
						new InputConstructor({
							label: "Username",
							minCharacter: 4,
							inputType: "text",
						}),
						new InputConstructor({
							label: "Email",
							minCharacter: 4,
							inputType: "email",
						}),
						new InputConstructor({
							label: "Age",
							inputType: "number",
						}),
						new InputConstructor({
							label: "Password",
							minCharacter: 8,
							inputType: "password",
						}),
						new InputConstructor({
							label: "Remind Me",
							inputType: "checkbox",
						}),
						new InputConstructor({
							label: "Are you okay ?",
							inputType: "checkbox",
						}),
					]}
				/>
			</section>
		</main>
	)
}
